'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconArrowPrev, IconArrowNext } from '@/app/components/svgs/icons';

export default function Pagination({ numberPages, currentPage }) {
	const pathname = usePathname();
	currentPage = parseInt(currentPage) || 1;
	const firstPage = pathname.replace(/\/page\/\d*$/, '');
	const paginationPath = `${firstPage}/page/`;
	const prevPage = currentPage > 1 ? currentPage - 1 : null;
	const twoPrev = currentPage > 2 ? currentPage - 2 : null;
	const nextPage = currentPage < numberPages ? currentPage + 1 : null;
	const twoNext = currentPage < numberPages - 1 ? currentPage + 2 : null;

	return (
		<nav className='u-mt-xl' aria-label='Pagination'>
			<ol className='o-cluster u-space-s u-insert-cluster u-fx-ctr'>
				{prevPage && (
					<li>
						<Link
							href={prevPage === 1 ? firstPage : `${paginationPath}${prevPage}`}
							className='o-box :brd-none :bg-secondary c-sq-btn c-display-xs'
							title='前のページ'
							aria-label='前のページへ'
						>
							<IconArrowPrev className='o-icon' />
							<span className='sr-only'>前のページへ</span>
						</Link>
					</li>
				)}
				{twoPrev && (
					<li>
						<Link
							href={twoPrev === 1 ? firstPage : `${paginationPath}${twoPrev}`}
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							title={`${twoPrev}ページ`}
							aria-label={`${twoPrev}ページ目へ`}
						>
							{twoPrev}
						</Link>
					</li>
				)}
				{prevPage && (
					<li>
						<Link
							href={prevPage === 1 ? firstPage : `${paginationPath}${prevPage}`}
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							title={`${prevPage}ページ`}
							aria-label={`${prevPage}ページ目へ`}
						>
							{prevPage}
						</Link>
					</li>
				)}
				<li>
					<Link
						href={currentPage === 1 ? firstPage : `${paginationPath}${currentPage}`}
						className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
						aria-label='現在のページ'
						aria-current='page'
						title={`${currentPage}ページ`}
					>
						{currentPage}
					</Link>
				</li>
				{nextPage && (
					<li>
						<Link
							href={`${paginationPath}${nextPage}`}
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							title={`${nextPage}ページ`}
							aria-label={`${nextPage}ページ目へ`}
						>
							{nextPage}
						</Link>
					</li>
				)}
				{twoNext && (
					<li>
						<Link
							href={`${paginationPath}${twoNext}`}
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							title={`${twoNext}ページ`}
							aria-label={`${twoNext}ページ目へ`}
						>
							{twoNext}
						</Link>
					</li>
				)}
				{nextPage && (
					<li>
						<Link
							href={`${paginationPath}${nextPage}`}
							className='o-box :brd-none :bg-secondary c-sq-btn c-display-xs'
							title='次のページ'
							aria-label='次のページへ'
						>
							<IconArrowNext className='o-icon' />
							<span className='sr-only'>次のページへ</span>
						</Link>
					</li>
				)}
			</ol>
		</nav>
	);
}
