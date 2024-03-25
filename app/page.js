'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/app/components/includes/header';
import Footer from '@/app/components/includes/footer';
import LogoMark from '@/app/components/hero/logo-mark';
import LogoLetter from '@/app/components/hero/logo-letter';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className='o-sidebar c-hero'>
					<div className='o-cover c-hero__text'>
						<h1 className='o-stack o-cover__middle u-align-items-center u-font-weight-b u-letter-spacing-m'>
							<span className='c-hero-top'>ポートフォリオサイト</span>
							<span className='c-hero-middle u-line-height-none'>
								<LogoLetter />
								<span className='sr-only'>シン・仮面ライター</span>
							</span>
							<span className='c-hero-bottom'>不定期更新中</span>
						</h1>
					</div>
					<div className='c-hero__pict'>
						<LogoMark className='c-hero-mark' />
					</div>
				</div>
				<div className={styles.description}>
					<div>
						<a
							href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'
						>
							By{' '}
							<Image
								src='/vercel.svg'
								alt='Vercel Logo'
								className={styles.vercelLogo}
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
				</div>

				<div className={styles.center}>
					<Image className={styles.logo} src='/next.svg' alt='Next.js Logo' width={180} height={37} priority />
				</div>

				<div className={styles.grid}>
					<a
						href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						className={styles.card}
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2>
							Docs <span>-&gt;</span>
						</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a
						href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						className={styles.card}
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2>
							Learn <span>-&gt;</span>
						</h2>
						<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
					</a>

					<a
						href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						className={styles.card}
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2>
							Templates <span>-&gt;</span>
						</h2>
						<p>Explore starter templates for Next.js.</p>
					</a>

					<a
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						className={styles.card}
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2>
							Deploy <span>-&gt;</span>
						</h2>
						<p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
					</a>
				</div>
			</main>
			<Footer />
		</>
	);
}
