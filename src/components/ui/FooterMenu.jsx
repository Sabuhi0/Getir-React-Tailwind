function FooterMenu({title, items}) {
  return (
    <section>
        <nav className="grid gap-y-4">
            <h1 className="text-lg text-primary-brand-color">{title}</h1>
            <nav>
                <ul className="grid gap-y-2">
                    {items.map((item, key) => (
                        <li key={key}>
                            <a href="/" className="text-sm">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </nav>
    </section>
  )
}

export default FooterMenu