import Head from 'next/head';
import Image from 'next/image';

export default function About() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Head>
				<title>AIDevBlog - About</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta content="AIDevBlog" property="og:title" />
				<meta content="Our blog covers the latest trends and developments in coding and AI. From programming languages to machine learning, we share insights and experiences on a wide range of topics. Whether you're a seasoned developer or just starting out, we hope you'll find our blog a valuable resource." property="og:description" />
				<meta content="https://aidevblog.vercel.app/" property="og:url" />
				<meta content="https://aidevblog.vercel.app/favicon.jpg" property="og:image" />
				<meta name="twitter:card" content="https://aidevblog.vercel.app/favicon.jpg"></meta>
				<meta content="#8B5CF6" data-react-helmet="true" name="theme-color" />
			</Head>
			<h1 className='text-3xl'>AIDevBlog, A Website Written By An AI</h1>
		</div>
	)
}