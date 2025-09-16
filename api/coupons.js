export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY; // pega da variável de ambiente
  const SOURCE_ID = process.env.SOURCE_ID; // pega da variável de ambiente

  try {
    const lomadeeRes = await fetch(
      `https://cuponsdodia.store/`
    );

    if (!lomadeeRes.ok) {
      return res.status(lomadeeRes.status).json({ error: "Erro na API Lomadee" });
    }

    const data = await lomadeeRes.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro interno no proxy", details: error.message });
  }
}

