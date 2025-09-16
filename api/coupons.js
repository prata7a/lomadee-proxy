export default async function handler(req, res) {
  const API_KEY = "HpV0rIXRuTIhta7k0MPZAqLkO14Q9Vsr"; // sua API Key da Lomadee
 const SOURCE_ID = "9125b777-4886-40e7-a874-86e2471ca3a7"; // ID real do canal

  try {
    const lomadeeRes = await fetch(
      `https://api.lomadee.com/v3/${API_KEY}/coupon/_all?sourceId=${SOURCE_ID}`
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
