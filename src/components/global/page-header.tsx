import { ElementType, ReactNode } from "react"

interface PageHeaderProps {
  icon?: ElementType;
  title: string
  description: string
}

const PageHeader = ({title, description, icon: Icon}:PageHeaderProps) => {
  return (
    <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="flex items-center gap-2">
          {Icon && <Icon className="h-8 w-8 text-primary" />}
          {title}
        </span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {description}
        </p>
      </header>
  )
}

export { PageHeader }