import config from '@/config/setting.json';
import { IconExternal } from '@/app/components/svgs/icons';

export const metadata = {
	title: 'プライバシーポリシー',
	description: 'this is contact',
};

export default function PrivacyPolicy() {
	return (
		<div className='o-center :rd-bx u-px-clamp u-pb-xl'>
			<h1 className='c-heading u-fnt-wt'>プライバシーポリシー</h1>
			<p className='c-content-l u-fnt-wx'>
				{config.terms.company}
				（以下「当社」といいます。）は、当社の提供するサービス（以下「本サービス」といいます。）における、ユーザーについての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
			</p>
			<dl className='o-stack u-mb-xl'>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第1条（収集する利用者情報及び収集方法）</dt>
				<dd className='c-content-l u-fnt-wx'>
					本ポリシーにおいて、「利用者情報」とは、ユーザーの識別に係る情報、通信サービス上の行動履歴、その他ユーザーまたはユーザーの端末に関連して生成または蓄積された情報であって、本ポリシーに基づき当社が収集するものを意味するものとします。本サービスにおいて当社が収集する利用者情報は、その収集方法に応じて、以下のようなものとなります。
					<ol className='c-cnt-list :secondary'>
						<li>
							<span className='u-text-weight-b'>ユーザーからご提供いただく情報</span>
							<br />
							本サービスを利用するために、または本サービスの利用を通じてユーザーからご提供いただく情報は以下のとおりです。
							<ul className='c-dsc-list'>
								<li>氏名、生年月日、性別、職業等プロフィールに関する情報</li>
								<li>メールアドレス、電話番号、住所等連絡先に関する情報</li>
								<li>クレジットカード情報、銀行口座情報、電子マネー情報等決済手段に関する情報</li>
								<li>ユーザーの肖像を含む静止画情報</li>
								<li>入力フォームその他当社が定める方法を通じてユーザーが入力または送信する情報</li>
							</ul>
						</li>
						<li>
							<span className='u-text-weight-b'>
								ユーザーが本サービスの利用において、他のサービスと連携を許可することにより、当該他のサービスからご提供いただく情報
							</span>
							<br />
							ユーザーが、本サービスを利用するにあたり、ソーシャルネットワーキングサービス等の他のサービスとの連携を許可した場合には、その許可の際にご同意いただいた内容に基づき、以下の情報を当該外部サービスから収集します。
							<ul className='c-dsc-list'>
								<li>当該外部サービスでユーザーが利用するID</li>
								<li>その他当該外部サービスのプライバシー設定によりユーザーが連携先に開示を認めた情報</li>
							</ul>
						</li>
						<li>
							<span className='u-text-weight-b'>ユーザーが本サービスを利用するにあたって、当社が収集する情報</span>
							<br />
							当社は、本サービスへのアクセス状況やそのご利用方法に関する情報を収集することがあります。これには以下の情報が含まれます。
							<ul className='c-dsc-list'>
								<li>リファラ</li>
								<li>IPアドレス</li>
								<li>サーバーアクセスログに関する情報</li>
								<li>Cookie、ADID、IDFAその他の識別子</li>
							</ul>
						</li>
						<li>
							<span className='u-text-weight-b'>
								ユーザーが本サービスを利用するにあたって、当社がユーザーの個別同意に基づいて収集する情報
							</span>
							<br />
							当社は、ユーザーが3-1に定める方法により個別に同意した場合、当社は以下の情報を利用中の端末から収集します。
							<ul className='c-dsc-list'>
								<li>位置情報</li>
							</ul>
						</li>
					</ol>
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第2条（利用目的）</dt>
				<dd className='c-content-l u-fnt-wx'>
					本サービスのサービス提供にかかわる利用者情報の具体的な利用目的は以下のとおりです。
					<ol className='c-cnt-list :secondary'>
						<li>
							本サービスに関する登録の受付、本人確認、ユーザー認証、ユーザー設定の記録、利用料金の決済計算等本サービスの提供、維持、保護及び改善のため
						</li>
						<li>ユーザーのトラフィック測定及び行動測定のため</li>
						<li>広告の配信、表示及び効果測定のため</li>
						<li>本サービスに関するご案内、お問い合わせ等への対応のため</li>
						<li>
							本サービスに関する当社の規約、ポリシー等（以下「規約等」といいます。）に違反する行為に対する対応のため
						</li>
						<li>本サービスに関する規約等の変更などを通知するため</li>
					</ol>
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>
					第3条（通知・公表または同意取得の方法、利用中止要請の方法）
				</dt>
				<dd className='c-content-l u-fnt-wx'>
					<ol className='c-cnt-list'>
						<li>
							以下の利用者情報については、その収集が行われる前にユーザーの同意を得るものとします。
							<ul className='c-dsc-list'>
								<li>位置情報</li>
							</ul>
						</li>
						<li>
							ユーザーは、本サービスの所定の設定を行うことにより、利用者情報の全部または一部についてその収集又は利用の停止を求めることができ、この場合、当社は速やかに、当社の定めるところに従い、その利用を停止します。なお利用者情報の項目によっては、その収集または利用が本サービスの前提となるため、当社所定の方法により本サービスを解約した場合に限り、当社はその収集又は利用を停止します。
						</li>
					</ol>
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第4条（外部送信、第三者提供、情報収集モジュールの有無）</dt>
				<dd className='c-content-l u-fnt-wx'>
					本サービスには以下の情報収集モジュールが組み込まれています。これらの情報収集モジュールは、ユーザーの端末にCookieを保存し、これを利用して利用者情報を蓄積及び利用する場合があります。また、モジュール提供者（日本国外にある者を含みます。）へ利用者情報を提供する場合があります。提携先のプライバシーポリシー、オプトアウト、第三者提供の有無等については個別にご確認いただき、必要に応じて無効化してください。
					<ol className='c-cnt-list'>
						<li className='u-mt-m'>
							Google Analytics
							<dl className='o-sidebar u-space-none u-insert-sidebar u-mt-s'>
								<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>提携先</dt>
								<dd className='o-box :td-bx u-py-s u-px-m'>グーグル合同会社</dd>
								<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>利用目的</dt>
								<dd className='o-box :td-bx u-py-s u-px-m'>アクセス情報の解析、サービス、サイトの改善</dd>
								<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>プライバシーポリシーのURL</dt>
								<dd className='o-box :td-bx u-py-s u-px-m'>
									<a
										className='c-lnk-txt :has-line :has-color u-dsp-b'
										href='https://policies.google.com/privacy?hl=ja'
										target='_blank'
										rel='noopener noreferrer'
									>
										<span className='u-fnt-wl :slnt'>https://policies.google.com/privacy?hl=ja</span>
										<IconExternal className='o-icon u-ml-s' />
									</a>
								</dd>
								<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>オプトアウト（無効化）URL</dt>
								<dd className='o-box :td-bx u-py-s u-px-m'>
									<a
										className='c-lnk-txt :has-line :has-color u-dsp-b'
										href='https://support.google.com/analytics/answer/181881?hl=ja'
										target='_blank'
										rel='noopener noreferrer'
									>
										<span className='u-fnt-wl :slnt'>https://support.google.com/analytics/answer/181881?hl=ja</span>
										<IconExternal className='o-icon u-ml-s' />
									</a>
								</dd>
							</dl>
						</li>
					</ol>
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第5条（第三者提供）</dt>
				<dd className='c-content-l u-fnt-wx'>
					当社は、利用者情報のうち、個人情報については、あらかじめユーザーの同意を得ないで、第三者（日本国外にある者を含みます。）に提供しません。但し、次に掲げる必要があり第三者（日本国外にある者を含みます。）に提供する場合はこの限りではありません。
					<ol className='c-cnt-list :secondary'>
						<li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
						<li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
						<li>第4条の定めに従って、提携先または情報収集モジュール提供者へ個人情報が提供される場合</li>
						<li>
							国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合
						</li>
						<li>
							その他、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の法令で認められる場合
						</li>
					</ol>
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第6条（共同利用）</dt>
				<dd className='c-content-l u-fnt-wx'>
					<p className='u-mb-l'>当社は、以下のとおりユーザーの個人情報を共同利用します。</p>
					<dl className='o-sidebar u-space-none u-insert-sidebar'>
						<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>
							<span className='u-dsp-ifx'>
								<span className='u-mr-s'>(1)</span>
								共同して利用される個人情報の項目
							</span>
						</dt>
						<dd className='o-box :td-bx u-py-s u-px-m'>
							<ul className='c-dsc-list'>
								<li>氏名</li>
								<li>メールアドレス</li>
								<li>その他当社が定める入力フォームにユーザーが入力する情報</li>
							</ul>
						</dd>
						<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>
							<span className='u-dsp-ifx'>
								<span className='u-mr-s'>(2)</span>
								共同して利用する者の範囲
							</span>
						</dt>
						<dd className='o-box :td-bx u-py-s u-px-m'>当社と機密保持契約を結んだ個人または法人</dd>
						<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>
							<span className='u-dsp-ifx'>
								<span className='u-mr-s'>(3)</span>
								共同して利用する者の利用目的
							</span>
						</dt>
						<dd className='o-box :td-bx u-py-s u-px-m'>当該サービスにおける利用目的と同じ</dd>
						<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>
							<span className='u-dsp-ifx'>
								<span className='u-mr-s'>(4)</span>
								個人情報の管理について責任を有する者の氏名または名称
							</span>
						</dt>
						<dd className='o-box :td-bx u-py-s u-px-m'>{config.terms.acount}</dd>
					</dl>
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第7条（個人情報の開示）</dt>
				<dd className='c-content-l u-fnt-wx'>
					当社は、ユーザーから、個人情報保護法の定めに基づき個人情報の開示を求められたときは、ユーザーご本人からのご請求であることを確認の上で、ユーザーに対し、遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知いたします。）。但し、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。なお、個人情報の開示につきましては、手数料（1件あたり1,000円）を頂戴しておりますので、あらかじめ御了承ください。
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第8条（個人情報の訂正及び利用停止等）</dt>
				<dd className='c-content-l u-fnt-wx'>
					<ol className='c-cnt-list'>
						<li>
							当社は、ユーザーから、(1)個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び(2)あらかじめ公表された利用目的の範囲を超えて取扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合には、ユーザーご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正または利用停止を行い、その旨をユーザーに通知します。なお、訂正または利用停止を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします。
						</li>
						<li>
							当社は、ユーザーから、ユーザーの個人情報について消去を求められた場合、当社が当該請求に応じる必要があると判断した場合は、ユーザーご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨をユーザーに通知します。
						</li>
						<li>
							個人情報保護法その他の法令により、当社が訂正等または利用停止等の義務を負わない場合は、第8条1項および第8条2項の規定は適用されません。
						</li>
					</ol>
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第9条（お問い合わせ窓口）</dt>
				<dd className='c-content-l u-fnt-wx'>
					<p className='u-mb-l'>
						ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。
					</p>
					<dl className='o-sidebar u-space-none u-insert-sidebar'>
						<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>屋号</dt>
						<dd className='o-box :td-bx u-py-s u-px-m'>{config.terms.company}</dd>
						<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>個人情報取扱責任者</dt>
						<dd className='o-box :td-bx u-py-s u-px-m'>{config.terms.acount}</dd>
						<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>連絡先</dt>
						<dd className='o-box :td-bx u-py-s u-px-m'>
							<a
								className='c-lnk-txt :has-line :has-color u-dsp-b'
								href={`mailto:${config.mail.primary}`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='u-fnt-wl :slnt'>{config.mail.primary}</span>
							</a>
						</dd>
					</dl>
				</dd>
				<dt className='c-sec-heading u-fnt-wt u-txt-ctr'>第10条（プライバシーポリシーの変更手続）</dt>
				<dd className='c-content-l u-fnt-wx'>
					当社は、必要に応じて、本ポリシーを変更します。但し、法令上ユーザーの同意が必要となるような本ポリシーの変更を行う場合、変更後の本ポリシーは、当社所定の方法で変更に同意したユーザーに対してのみ適用されるものとします。なお、当社は、本ポリシーを変更する場合には、変更後の本ポリシーの施行時期及び内容を当社のウェブサイト上での表示その他の適切な方法により周知し、またはユーザーに通知します。
				</dd>
			</dl>
			<p className='c-suppl-l u-txt-r u-fnt-wx'>【{config.terms.publish} 制定】</p>
		</div>
	);
}
