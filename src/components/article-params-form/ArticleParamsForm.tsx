import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { SyntheticEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import { Text } from '../text';

type ArticleParamsFormProps = {
	currentArticleState: ArticleStateType;
	setCurrentArticleState: (articleState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	currentArticleState,
	setCurrentArticleState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const formRef = useRef<HTMLDivElement>(null);
	const [currentFontFamily, setCurrentFontFamily] = useState(
		fontFamilyOptions[0]
	);
	const [currentFontSize, setCurrentFontSize] = useState(fontSizeOptions[0]);
	const [currentFontColor, setCurrentFontColor] = useState(fontColors[0]);
	const [currentBackgroundColor, setCurrentBackgroundColor] = useState(
		backgroundColors[0]
	);
	const [currentContentWidthArr, setCurrentContentWidthArr] = useState(
		contentWidthArr[0]
	);

	const handleFormSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setCurrentArticleState({
			...currentArticleState,
			fontFamilyOption: currentFontFamily,
			fontSizeOption: currentFontSize,
			fontColor: currentFontColor,
			backgroundColor: currentBackgroundColor,
			contentWidth: currentContentWidthArr,
		});
	};

	const handleFormReset = () => {
		setCurrentFontFamily(fontFamilyOptions[0]);
		setCurrentFontSize(fontSizeOptions[0]);
		setCurrentFontColor(fontColors[0]);
		setCurrentBackgroundColor(backgroundColors[0]);
		setCurrentContentWidthArr(contentWidthArr[0]);
		setCurrentArticleState(defaultArticleState);
	};

	useOutsideClickClose({
		isOpen,
		rootRef: formRef,
		onChange: setIsOpen,
	});

	return (
		<>
			<ArrowButton isOpen={isOpen} setIsOpen={setIsOpen} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}
				ref={formRef}>
				<form className={styles.form}>
					<Text
						as={'h2'}
						dynamicLite={true}
						size={31}
						weight={800}
						uppercase={true}
						additionClass={'text-shadow'}>
						задайте параметры
					</Text>
					<Select
						selected={currentFontFamily}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={setCurrentFontFamily}
					/>
					<RadioGroup
						name='18px'
						title='размер шрифта'
						selected={currentFontSize}
						options={fontSizeOptions}
						onChange={setCurrentFontSize}
					/>
					<Select
						selected={currentFontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={setCurrentFontColor}
					/>
					<Separator />
					<Select
						selected={currentBackgroundColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={setCurrentBackgroundColor}
					/>
					<Select
						selected={currentContentWidthArr}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={setCurrentContentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleFormReset} />
						<Button title='Применить' type='submit' onClick={handleFormSubmit} />
					</div>
				</form>
			</aside>
		</>
	);
};
