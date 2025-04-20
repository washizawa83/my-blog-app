type Props = {
  children: React.ReactNode
  editable?: boolean
}

const textColor = 'text-slate-300'
const utilConfig = `${textColor} max-w-full break-words`

const h1Config = `prose-h1:text-5xl prose-h1:border-b-3`
const h2Config = `prose-h2:text-3xl prose-h2:border-b-2`
const h3Config = `prose-h3:text-2xl prose-h3:border-b-1`
const h4Config = `prose-h4:text-xl`
const h5Config = `prose-h5:text-lg`
const h6Config = `prose-h6:text-l`

const headingConfig = `prose-headings:text-slate-300 prose-headings:my-4 prose-headings:mt-12 prose-headings:font-semibold prose-headings:pb-2 ${h1Config} ${h2Config} ${h3Config} ${h4Config} ${h5Config} ${h6Config}`

const paragraphConfig =
  'prose-p:text-base prose-p:whitespace-break-spaces prose-p:my-2'
const anchorLinkConfig = `prose-a:decoration-transparent prose-a:bg-orange-400/[.4] prose-a:rounded-xl prose-a:px-2 prose-a:hover:bg-orange-300/[.4] prose-a:text-slate-300`

const ulConfig = 'prose-ul:my-2'

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
