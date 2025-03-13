// TypeScript Temel Veri Türleri

// Number, String, Boolean
let age: number = 25;
let username: string = "Ahmet";
let isAdmin: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ali", "Veli", "Ayşe"];

// Tuple (Belirli sıra ile veri)
let person: [string, number] = ["Ahmet", 30];

// Enum (Sabit değerler)
enum Color {
  Red,    // 0
  Green,  // 1
  Blue,   // 2
}

let myColor: Color = Color.Green; // 1

// Any (Her türde değişken) - Önerilmez!
let variable: any = "Merhaba";
variable = 42; // Hata vermez ama tip güvenliği yok!

// Void (Fonksiyon dönüş değeri yok)
function logMessage(): void {
  console.log("Bu fonksiyon bir şey döndürmez!");
}

// Interface Kullanımı
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Kullanıcı Nesnesi
let user1: User = {
  id: 1,
  name: "Ali",
  email: "ali@example.com",
  isActive: true,
};

// user1.email = 123; //  Hata verir çünkü email string olmalı
console.log(user1);
