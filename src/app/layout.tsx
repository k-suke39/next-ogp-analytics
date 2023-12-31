import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://next-ogp-analytics.vercel.app/'),
	title: 'タイトル',
	description: '説明',
	openGraph: {
		title: 'タイトル',
		description: '説明',
	},
	twitter: {
		title: 'タイトル',
		description: '説明',
		card: 'summary_large_image',
	},
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
