export default async function handler(req, res) {
  const API_KEY = "HpV0rIXRuTIhta7k0MPZAqLkO14Q9Vsr"; // sua API Key da Lomadee
  const SOURCE_ID = "https://lomadee-proxy.vercel.app/api/coupons"; // seu domínio/canal cadastrado

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
