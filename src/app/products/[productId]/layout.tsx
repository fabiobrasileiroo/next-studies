export default function ProductDetailsLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <p style={{backgroundColor: 'aqua'}}>Especificacoes</p>
      {children}
    </>
  )
}