import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	// defaultArticleState,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(true);
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
					<h2 className={styles.form__title}>задайте параметры</h2>
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
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
