import Dexie from "dexie";

const db = new Dexie("testKiosk");

db.version(1).stores({
  users: "++id, name, email, password, role, status",
  products: "++id, name, price, description, image, status",
  orders: "++id, user_id, product_id, quantity, total, status",
  settings: "++id, name, value",
});
