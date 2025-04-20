type Props = {
  children: React.ReactNode
  editable?: boolean
}

const textColor = 'text-slate-300'
const utilConfig = `${textColor} max-w-full break-words`

const h1Config = `prose-h1:text-4xl prose-h1:mt-18 prose-h1:mb-0`
const h2Config = `prose-h2:text-base prose-h2:mt-16 prose-h2:mb-0`
const h3Config = `prose-h3:text-sm prose-h3:mt-12 prose-h3:mb-0`
const h4Config = `prose-h4:text-sm prose-h4:mt-10 prose-h4:mb-0`
const h5Config = ``
const h6Config = ``

const headingConfig = `prose-headings:text-slate-200 prose-headings:font-semibold prose-headings:font-normal ${h1Config} ${h2Config} ${h3Config} ${h4Config} ${h5Config} ${h6Config}`

const paragraphConfig =
  'prose-p:text-sm prose-p:whitespace-break-spaces prose-p:mt-6 prose-p:mb-0 prose-p:leading-7'
const strongConfig = 'prose-strong:text-slate-200 prose-strong:font-bold'
const anchorLinkConfig = `prose-a:text-slate-200 prose-a:font-semibold prose-a:mx-1 prose-a:decoration-transparent prose-a:border-b prose-a:hover:border-b-2 prose-a:border-emerald-600 prose-a:hover:border-emerald-600`

const ulConfig = 'prose-ul:mt-6 prose-ul:mb-0 prose-ul:marker:text-slate-600'

const blockquoteConfig =
  'prose-blockquote:bg-neutral-500 prose-blockquote:rounded prose-blockquote:py-1 prose-blockquote:my-2'
const preConfig = 'prose-pre:bg-[#1F2028]'
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
      ${preConfig}
      ${codeConfig}
    `}
    >
      {children}
    </div>
  )
}
