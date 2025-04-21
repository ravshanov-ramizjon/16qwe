'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type PageTitleContextType = {
	pageTitle: string;
	setPageTitle: (title: string) => void;
};

const PageTitleContext = createContext<PageTitleContextType | null>(null);

export const usePageTitle = () => {
	const context = useContext(PageTitleContext);
	if (!context) throw new Error('usePageTitle must be used within PageTitleProvider');
	return context;
};

export const PageTitleProvider = ({ children }: { children: React.ReactNode }) => {
	const [pageTitle, setPageTitle] = useState('Для вас');

	useEffect(() => {
		const savedTitle = localStorage.getItem('lastVisitedRoute');
		if (savedTitle && savedTitle !== 'null') {
			setPageTitle(savedTitle);
		}
	}, []);

	const updateTitle = (title: string) => {
		localStorage.setItem('lastVisitedRoute', title);
		setPageTitle(title);
	};

	return (
		<PageTitleContext.Provider value={{ pageTitle, setPageTitle: updateTitle }}>
			{children}
		</PageTitleContext.Provider>
	);
};
