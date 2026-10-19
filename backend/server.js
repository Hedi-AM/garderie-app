const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// ---------- DATA ----------
const garderie = {
  name: "Les Petits Anges",
  slogan: "A happy place for your little ones",
  description:
    "At Les Petits Anges, your children learn, play and grow in a safe, caring and colorful environment.",
  address: "12 Rue des Fleurs, Tunis",
  phone: "+216 00 000 000",
  email: "contact@petitsanges.tn",
  openingHours: "Monday to Friday, 7:30 AM - 6:00 PM",
};

const services = [
  {
    id: 1,
    icon: "🍎",
    title: "Healthy Meals",
    description: "Balanced and tasty meals prepared fresh every day.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Creative Workshops",
    description: "Drawing, music and crafts to develop creativity.",
  },
  {
    id: 3,
    icon: "😴",
    title: "Nap Time",
    description: "A calm, comfortable space for a good rest.",
  },
];

const activites = [
  { id: 1, name: "Finger Painting", ageGroup: "2-3 years", time: "9:00 AM" },
  { id: 2, name: "Story Time", ageGroup: "3-4 years", time: "10:30 AM" },
  { id: 3, name: "Music and Dance", ageGroup: "3-5 years", time: "2:00 PM" },
  { id: 4, name: "Outdoor Games", ageGroup: "4-5 years", time: "4:00 PM" },
];

// ---------- ROUTES ----------
app.get("/api/garderie", (req, res) => {
  res.json(garderie);
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.get("/api/activites", (req, res) => {
  res.json(activites);
});

// ---------- REGISTRATIONS ----------
const inscriptions = [];

app.post("/api/inscriptions", (req, res) => {
  const { parentName, email, phone, childName, childAge, message } = req.body;

  // Basic validation: these fields are required
  if (!parentName || !email || !childName || !childAge) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  const inscription = {
    id: inscriptions.length + 1,
    parentName,
    email,
    phone: phone || "",
    childName,
    childAge,
    message: message || "",
    date: new Date().toISOString(),
  };

  inscriptions.push(inscription);
  console.log("New registration:", inscription);

  res.status(201).json({ message: "Registration received!", id: inscription.id });
});

// ---------- START ----------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});