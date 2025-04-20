type Props = {
  children: React.ReactNode
  editable?: boolean
}

const textColor = 'text-slate-300'
const utilConfig = `${textColor} max-w-full break-words`

const h1Config = `prose-h1:text-4xl prose-h1:py-12 prose-h1:pl-5 prose-h1:border-l-4 prose-h1:border-indigo-500`
const h2Config = `prose-h2:text-2xl prose-h2:my-12`
const h3Config = `prose-h3:text-xl prose-h2:my-12`
const h4Config = `prose-h4:text-lg prose-h4:font-semibold`
const h5Config = `prose-h5:text-md prose-h5:font-semibold`
const h6Config = `prose-h6:text-sm prose-h6:font-semibold`

const headingConfig = `prose-headings:text-slate-300 prose-headings:font-normal prose-headings:my-8 prose-headings:pb-2 ${h1Config} ${h2Config} ${h3Config} ${h4Config} ${h5Config} ${h6Config}`

const paragraphConfig =
  'prose-p:text-base prose-p:whitespace-break-spaces prose-p:my-4 prose-p:leading-7'
const strongConfig = 'prose-strong:text-slate-300 prose-strong:font-bold'
const anchorLinkConfig = `prose-a:decoration-transparent prose-a:bg-pink-400/[.7] prose-a:rounded-xl prose-a:px-2 prose-a:mx-1 prose-a:hover:bg-pink-500/[.8] prose-a:text-slate-300`

const ulConfig = 'prose-ul:my-2 prose-ul:marker:text-teal-500'

const blockquoteConfig =
  'prose-blockquote:bg-neutral-500 prose-blockquote:rounded prose-blockquote:py-1 prose-blockquote:my-2'
const codeConfig = 'prose-code:text-teal-400'

export default function MdxLayout({ children, editable = false }: Props) {
  // Create any shared layout or styles here
  return (
    <div
      className={`
      prose
      ${editable && 'h-mdx-editor overflow-y-auto'}
      ${utilConfig}
      ${headingConfig}
      ${paragraphConfig}
      ${strongConfig}
      ${anchorLinkConfig}
      ${ulConfig}
      ${blockquoteConfig}
      ${codeConfig}
    `}
    >
      {children}
    </div>
  )
}
