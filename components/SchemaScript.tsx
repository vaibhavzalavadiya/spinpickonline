interface SchemaScriptProps {
  schema: object;
  id?: string;
}

export default function SchemaScript({ schema, id }: SchemaScriptProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

