
interface PageHeaderProps {
  Title: string
  description: string
}

const PageHeader = ({Title,description}:PageHeaderProps) => {
  return (
    <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">{Title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {description}
        </p>
      </header>
  )
}

export { PageHeader }