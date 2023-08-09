import { TaskProvider } from "@/context/task.context";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aplicación de Tareas",
  description:
    "Organiza tu dia creando tareas que debes realizar durante el dia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
