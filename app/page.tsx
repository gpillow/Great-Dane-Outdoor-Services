import Image from "next/image";
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#111111",
      color: "white",
      fontFamily: "Arial, sans-serif",
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 40px",
        borderBottom: "1px solid #333",
      }}>
       <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
  <Image
    src="/logo.png"
    alt="Great Dane Outdoor Services Logo"
    width={110}
    height={110}
  />

  <strong style={{ fontSize: "1.3rem" }}>
    Great Dane Outdoor Services
  </strong>
</div>

        <a
          href="#contact"
          style={{
            backgroundColor: "#f97316",
            color: "white",
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Get a Free Quote
        </a>
      </nav>

      <section style={{
        padding: "90px 40px",
        textAlign: "center",
        maxWidth: "1000px",
        margin: "0 auto",
      }}>
        <p style={{
          color: "#f97316",
          fontWeight: "bold",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}>
          Serving Northwest Arkansas
        </p>

        <h1 style={{
          fontSize: "4rem",
          lineHeight: "1.1",
          marginBottom: "24px",
        }}>
          Reliable Outdoor Services Built on Hard Work
        </h1>

        <p style={{
          fontSize: "1.3rem",
          color: "#d1d5db",
          maxWidth: "750px",
          margin: "0 auto 36px",
        }}>
          Pressure washing, junk removal, landscaping, brush removal, leaf cleanups,
          and Christmas lights for homeowners and businesses across Northwest Arkansas.
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            backgroundColor: "#f97316",
            color: "white",
            textDecoration: "none",
            padding: "16px 28px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Request a Free Estimate
        </a>
      </section>

      <section style={{
        backgroundColor: "#1f1f1f",
        padding: "70px 40px",
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
        }}>
          What We Do
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {[
            "Pressure Washing",
            "Junk Removal",
            "Landscaping",
            "Brush Removal",
            "Leaf Cleanups",
            "Christmas Lights",
          ].map((service) => (
            <div
              key={service}
              style={{
                backgroundColor: "#111111",
                border: "1px solid #333",
                borderRadius: "14px",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.3rem" }}>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
          Ready to Clean Up Your Property?
        </h2>

        <p style={{ color: "#d1d5db", fontSize: "1.2rem", marginBottom: "28px" }}>
          Call, text, or request a quote today.
        </p>

        <a
          href="tel:"
          style={{
            display: "inline-block",
            backgroundColor: "#f97316",
            color: "white",
            textDecoration: "none",
            padding: "16px 30px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Call Now
        </a>
      </section>
    </main>
  );
}