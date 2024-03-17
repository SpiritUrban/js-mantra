import Image from "next/image";

export default function Home() {
  return (
    <main 
    className=""
    style={{
      minHeight: '100vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
    >

      <Image
        src="/logo.webp"
        alt="JS Mantra"
        className="test"
        width={1000}
        height={1000}
        priority
        style={{
          filter: "invert(100%)",
          borderRadius: "20rem"
        }}
      />

    </main>
  );
}

// priority пред загрузка