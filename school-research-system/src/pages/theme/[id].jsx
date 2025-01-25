import { useRouter } from 'next/router';
import { mockData } from '../../utils/mockData'; // Dados simulados

const ThemeDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Obtendo o ID da URL

  // Encontrar o tema com base no ID
  const theme = mockData.find(item => item.id === parseInt(id));

  if (!theme) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{theme.topic}</h1>
      <p><strong>Categoria:</strong> {theme.category}</p>
      <p>{theme.description}</p>
      {/* Outros detalhes ou recursos adicionais aqui */}
    </div>
  );
};

export default ThemeDetail;
