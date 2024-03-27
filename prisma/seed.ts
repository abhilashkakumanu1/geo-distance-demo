import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const places = [
  { name: "New Delhi", latitude: 28.6139, longitude: 77.209 },
  { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { name: "Bangalore", latitude: 12.9716, longitude: 77.5946 },
  { name: "Chennai", latitude: 13.0827, longitude: 80.2707 },
  { name: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
  { name: "Hyderabad", latitude: 17.385, longitude: 78.4867 },
  { name: "Pune", latitude: 18.5204, longitude: 73.8567 },
  { name: "Jaipur", latitude: 26.9124, longitude: 75.7873 },
  { name: "Ahmedabad", latitude: 23.0225, longitude: 72.5714 },
  { name: "Lucknow", latitude: 26.8467, longitude: 80.9462 },
  { name: "Surat", latitude: 21.1702, longitude: 72.8311 },
  { name: "Kanpur", latitude: 26.4499, longitude: 80.3319 },
  { name: "Nagpur", latitude: 21.1458, longitude: 79.0882 },
  { name: "Indore", latitude: 22.7196, longitude: 75.8577 },
  { name: "Thane", latitude: 19.2183, longitude: 72.9781 },
  { name: "Bhopal", latitude: 23.2599, longitude: 77.4126 },
  { name: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185 },
  { name: "Pimpri-Chinchwad", latitude: 18.6279, longitude: 73.8009 },
  { name: "Patna", latitude: 25.5941, longitude: 85.1376 },
  { name: "Vadodara", latitude: 22.3072, longitude: 73.1812 },
  { name: "Ghaziabad", latitude: 28.6692, longitude: 77.4538 },
  { name: "Ludhiana", latitude: 30.9, longitude: 75.85 },
  { name: "Agra", latitude: 27.1767, longitude: 78.0081 },
  { name: "Nashik", latitude: 19.9975, longitude: 73.7898 },
  { name: "Faridabad", latitude: 28.4089, longitude: 77.3178 },
  { name: "Meerut", latitude: 28.9845, longitude: 77.7064 },
  { name: "Rajkot", latitude: 22.3039, longitude: 70.8022 },
  { name: "Kalyan-Dombivli", latitude: 19.235, longitude: 73.1296 },
  { name: "Vasai-Virar", latitude: 19.391, longitude: 72.8397 },
  { name: "Varanasi", latitude: 25.3176, longitude: 82.9739 },
  { name: "Srinagar", latitude: 34.0836, longitude: 74.7973 },
  { name: "Aurangabad", latitude: 19.8762, longitude: 75.3433 },
  { name: "Dhanbad", latitude: 23.7957, longitude: 86.4304 },
  { name: "Amritsar", latitude: 31.634, longitude: 74.8723 },
  { name: "Navi Mumbai", latitude: 19.033, longitude: 73.0297 },
  { name: "Allahabad", latitude: 25.4358, longitude: 81.8463 },
  { name: "Ranchi", latitude: 23.3441, longitude: 85.3096 },
  { name: "Howrah", latitude: 22.5958, longitude: 88.2636 },
  { name: "Jabalpur", latitude: 23.1815, longitude: 79.9864 },
  { name: "Gwalior", latitude: 26.2183, longitude: 78.1828 },
  { name: "Vijayawada", latitude: 16.5062, longitude: 80.648 },
  { name: "Jodhpur", latitude: 26.2389, longitude: 73.0243 },
  { name: "Madurai", latitude: 9.9252, longitude: 78.1198 },
  { name: "Raipur", latitude: 21.2514, longitude: 81.6296 },
  { name: "Kota", latitude: 25.2138, longitude: 75.8648 },
  { name: "Chandigarh", latitude: 30.7333, longitude: 76.7794 },
  { name: "Guwahati", latitude: 26.1445, longitude: 91.7362 },
];

async function main() {
  for (let place of places) {
    await prisma.places.create({
      data: place,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
