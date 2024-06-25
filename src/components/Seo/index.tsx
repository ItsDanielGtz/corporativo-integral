import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
}

function Seo({ title, description, keywords }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(",")} />}
      <html lang="es" />
    </Helmet>
  );
}

export default Seo;
