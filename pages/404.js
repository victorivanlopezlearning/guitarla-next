import Link from "next/link";
import Layout from "@/components/layout";

export default function Custom404() {
  return (
    <>
      <Layout
        title="Página no encontrada"
      >
        <main className="error-404 container">
          <p className="error-404-description">404 - Página no encontrada</p>
          <Link href='/' className="btn-link btn-error-404">
            Volver a Inicio
          </Link>
        </main>
      </Layout>
    </>
  )
}