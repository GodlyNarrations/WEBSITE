<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cozy Corner Cafe</title>
  <style>
    :root {
      --bg: #f7f1ea;
      --card: #fffaf5;
      --accent: #8b5e3c;
      --accent-dark: #5f3d28;
      --text: #2f241d;
      --muted: #7b685c;
      --line: #e7d9cb;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    .container {
      width: min(1120px, 92%);
      margin: 0 auto;
    }

    header {
      background: linear-gradient(rgba(47, 36, 29, 0.58), rgba(47, 36, 29, 0.58)),
        url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
      min-height: 100vh;
      color: white;
      display: flex;
      flex-direction: column;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem 0;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .logo span {
      color: #f0c9a3;
    }

    .nav-links {
      display: flex;
      gap: 1.2rem;
      list-style: none;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.2s ease;
    }

    .nav-links a:hover {
      opacity: 0.8;
    }

    .hero {
      flex: 1;
      display: grid;
      place-items: center;
      text-align: center;
      padding: 2rem 0 4rem;
    }

    .hero-content {
      max-width: 760px;
    }

    .hero h1 {
      font-size: clamp(2.4rem, 5vw, 4.4rem);
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.1rem;
      color: #f6eee8;
      margin-bottom: 1.8rem;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 0.9rem 1.3rem;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 700;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      opacity: 0.95;
    }

    .btn-primary {
      background: #f0c9a3;
      color: var(--accent-dark);
    }

    .btn-secondary {
      border: 2px solid rgba(255,255,255,0.75);
      color: white;
    }

    section {
      padding: 5rem 0;
    }

    .section-title {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .section-title h2 {
      font-size: 2rem;
      margin-bottom: 0.6rem;
      color: var(--accent-dark);
    }

    .section-title p {
      color: var(--muted);
      max-width: 680px;
      margin: 0 auto;
    }

    .story {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      align-items: center;
    }

    .story img {
      width: 100%;
      height: 420px;
      object-fit: cover;
      border-radius: 22px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.08);
    }

    .story-card {
      background: var(--card);
      padding: 2rem;
      border: 1px solid var(--line);
      border-radius: 22px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.05);
    }

    .story-card h3 {
      font-size: 1.7rem;
      margin-bottom: 1rem;
      color: var(--accent-dark);
    }

    .menu-grid,
    .features-grid,
    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.4rem;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 1.4rem;
      box-shadow: 0 10px 24px rgba(0,0,0,0.04);
    }

    .card h3 {
      margin-bottom: 0.5rem;
      color: var(--accent-dark);
    }

    .price {
      font-weight: 700;
      color: var(--accent);
      margin: 0.6rem 0;
    }

    .features {
      background: #efe4d7;
    }

    .review {
      position: relative;
    }

    .review::before {
      content: "“";
      font-size: 3rem;
      color: #d5b699;
      position: absolute;
      top: 0.2rem;
      right: 1rem;
      line-height: 1;
    }

    .hours-contact {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 1.6rem;
    }

    .info-box,
    form {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 22px;
      padding: 2rem;
      box-shadow: 0 10px 24px rgba(0,0,0,0.04);
    }

    .hours-list {
      list-style: none;
      margin-top: 1rem;
    }

    .hours-list li {
      display: flex;
      justify-content: space-between;
      padding: 0.7rem 0;
      border-bottom: 1px solid var(--line);
    }

    form {
      display: grid;
      gap: 1rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.95rem 1rem;
      border-radius: 14px;
      border: 1px solid #d9c4b4;
      font: inherit;
      background: white;
    }

    textarea {
      min-height: 130px;
      resize: vertical;
    }

    button {
      border: none;
      cursor: pointer;
      background: var(--accent);
      color: white;
      padding: 0.95rem 1.2rem;
      border-radius: 999px;
      font-weight: 700;
    }

    footer {
      background: var(--accent-dark);
      color: #f4e9df;
      text-align: center;
      padding: 2rem 1rem;
    }

    footer p {
      margin: 0.3rem 0;
    }

    @media (max-width: 900px) {
      .story,
      .menu-grid,
      .features-grid,
      .reviews-grid,
      .hours-contact {
        grid-template-columns: 1fr;
      }

      nav {
        flex-direction: column;
        gap: 0.8rem;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
      }

      .story img {
        height: 320px;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav>
        <div class="logo">Cozy <span>Corner</span> Cafe</div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#features">Why Us</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="hero">
        <div class="hero-content">
          <h1>Your warm little escape in the heart of the city.</h1>
          <p>
            Fresh coffee, flaky pastries, comforting brunch, and a relaxed atmosphere designed for slow mornings,
            catch-ups, and quiet afternoons.
          </p>
          <div class="hero-buttons">
            <a href="#menu" class="btn btn-primary">View Menu</a>
            <a href="#contact" class="btn btn-secondary">Book a Table</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section id="about">
      <div class="container">
        <div class="section-title">
          <h2>Made for comfort, coffee, and conversation</h2>
          <p>
            Cozy Corner Cafe blends handcrafted drinks, locally sourced ingredients, and a welcoming interior with soft lighting,
            natural textures, and a calm neighborhood feel.
          </p>
        </div>

        <div class="story">
          <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80" alt="Cozy cafe interior" />
          <div class="story-card">
            <h3>A cafe that feels like home</h3>
            <p>
              From the moment guests walk in, they’re welcomed by the aroma of freshly ground coffee, warm baked goods,
              and a thoughtfully designed space filled with timber tones, plants, and comfortable seating.
            </p>
            <br />
            <p>
              Whether someone is grabbing a quick flat white, settling in with a book, or meeting friends for brunch,
              the goal is simple: make every visit feel easy, warm, and memorable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="menu">
      <div class="container">
        <div class="section-title">
          <h2>Signature favourites</h2>
          <p>
            A carefully curated menu featuring rich coffee, seasonal brunch plates, and sweet treats baked fresh each day.
          </p>
        </div>

        <div class="menu-grid">
          <div class="card">
            <h3>House Flat White</h3>
            <p>Smooth espresso with silky milk and a rich, balanced finish.</p>
            <div class="price">$5.50</div>
          </div>
          <div class="card">
            <h3>Cinnamon French Toast</h3>
            <p>Thick-cut brioche, maple glaze, berries, and whipped mascarpone.</p>
            <div class="price">$18.00</div>
          </div>
          <div class="card">
            <h3>Truffle Mushroom Toast</h3>
            <p>Sourdough topped with creamy mushrooms, herbs, and parmesan.</p>
            <div class="price">$19.50</div>
          </div>
          <div class="card">
            <h3>Vanilla Iced Latte</h3>
            <p>Cold espresso, house vanilla syrup, and creamy milk over ice.</p>
            <div class="price">$6.00</div>
          </div>
          <div class="card">
            <h3>Almond Croissant</h3>
            <p>Buttery, flaky pastry filled with almond cream and toasted flakes.</p>
            <div class="price">$7.50</div>
          </div>
          <div class="card">
            <h3>Breakfast Board</h3>
            <p>Eggs, avocado, roasted tomatoes, sourdough, and house relish.</p>
            <div class="price">$22.00</div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <div class="container">
        <div class="section-title">
          <h2>Why locals love us</h2>
          <p>
            Every detail is designed to create a polished cafe brand that feels friendly, stylish, and genuinely inviting.
          </p>
        </div>

        <div class="features-grid">
          <div class="card">
            <h3>Crafted Coffee</h3>
            <p>Expertly brewed espresso and specialty drinks made by passionate baristas.</p>
          </div>
          <div class="card">
            <h3>Warm Atmosphere</h3>
            <p>Soft lighting, cozy seating, natural materials, and calm music throughout the day.</p>
          </div>
          <div class="card">
            <h3>Fresh Local Ingredients</h3>
            <p>Seasonal produce and quality suppliers that keep every dish tasting fresh and thoughtful.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="reviews">
      <div class="container">
        <div class="section-title">
          <h2>What guests are saying</h2>
          <p>
            A few words from the regulars who keep coming back for the coffee, brunch, and welcoming atmosphere.
          </p>
        </div>

        <div class="reviews-grid">
          <div class="card review">
            <h3>Emily R.</h3>
            <p>
              Beautiful little cafe with the best flat white I’ve had in ages. It feels calm, polished, and super inviting.
            </p>
          </div>
          <div class="card review">
            <h3>Jordan M.</h3>
            <p>
              The brunch menu is unreal. Great portions, lovely staff, and the whole space has that warm cozy energy.
            </p>
          </div>
          <div class="card review">
            <h3>Sophia L.</h3>
            <p>
              Perfect spot to sit with a laptop or catch up with friends. Everything feels thoughtfully designed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container">
        <div class="section-title">
          <h2>Visit or get in touch</h2>
          <p>
            Stop by for your morning coffee, book a table for brunch, or reach out for private events and group bookings.
          </p>
        </div>

        <div class="hours-contact">
          <div class="info-box">
            <h3>Opening Hours</h3>
            <ul class="hours-list">
              <li><span>Monday - Friday</span><span>7:00 AM - 4:00 PM</span></li>
              <li><span>Saturday</span><span>8:00 AM - 5:00 PM</span></li>
              <li><span>Sunday</span><span>8:00 AM - 3:00 PM</span></li>
            </ul>
            <p style="margin-top: 1.2rem;"><strong>Address:</strong> 24 Willow Street, Melbourne VIC</p>
            <p><strong>Phone:</strong> (03) 9000 1234</p>
            <p><strong>Email:</strong> hello@cozycornercafe.com</p>
          </div>

          <form>
            <h3>Send a message</h3>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <textarea placeholder="Tell us about your booking or enquiry"></textarea>
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <p><strong>Cozy Corner Cafe</strong></p>
    <p>Fresh coffee, warm service, and a space worth lingering in.</p>
    <p>© 2026 Cozy Corner Cafe. All rights reserved.</p>
  </footer>
</body>
</html>
