import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import {
	fontFamilyOptions,
	// fontColors,
	// backgroundColors,
	// contentWidthArr,
	fontSizeOptions,
	// defaultArticleState,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [currentFontFamily, setCurrentFontFamily] = useState(
		fontFamilyOptions[0]
	);
	const [currentfontSize, setCurrentfontSize] = useState(fontSizeOptions[0]);

	// const handleChangeFontFamily = (event: any) => {
	// 	console.log(event.target);
	// };

	return (
		<>
			<ArrowButton isOpen={isOpen} setIsOpen={setIsOpen} />
			<aside className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<Select
						selected={currentFontFamily}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={setCurrentFontFamily}
					/>
					<RadioGroup
						name='18px'
						title='размер шрифта'
						selected={currentfontSize}
						options={fontSizeOptions}
						onChange={setCurrentfontSize}
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
