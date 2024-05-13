import { NextResponse } from 'next/server';

export async function middleware(req) {
	const requestHeaders = new Headers(req.headers);
	requestHeaders.set('x-pathname', req.nextUrl.pathname);

	if (req.nextUrl.pathname.startsWith('/posts/')) {
		try {
			// ここでファイルの存在チェックなどの処理を行う
			// ファイルが存在する場合の処理をここに記述
		} catch (error) {
			// ファイルが見つからない場合の処理
			if (error.code === 'MODULE_NOT_FOUND') {
				// カスタムのnot-foundレスポンスを返す
				return new NextResponse('Page not found', { status: 404 });
			}
			// その他のエラーの場合はエラーを再スロー
			throw error;
		}
	}

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}
