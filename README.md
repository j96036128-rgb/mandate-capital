# Mandate Capital

Structured capital mandate intake website for institutional and qualified investors.

## Overview

Mandate Capital is a static website for collecting structured capital mandates across property, private credit, special situations, and structured equity. The site charges a £500 engagement deposit for review priority.

**This is NOT:**
- A broker or intermediary
- An investment adviser
- A marketplace or platform
- A fund or asset manager

## Structure

```
MandateCapital/
├── index.html              # Home page
├── how-it-works.html       # Process explanation
├── submit-mandate.html     # Mandate submission form
├── terms.html              # Terms of Service
├── privacy.html            # Privacy Policy
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles
│   └── js/
│       └── main.js         # Form validation, mobile nav
└── README.md
```

## Deployment to GitHub Pages

### Option 1: Root of Repository

1. Create a new GitHub repository (e.g., `mandate-capital` or `mandatecapital.github.io`)
2. Push all files to the `main` branch
3. Go to repository Settings → Pages
4. Under "Source", select `main` branch and `/ (root)` folder
5. Click Save
6. Site will be live at `https://[username].github.io/[repo-name]/`

### Option 2: Custom Domain

1. Complete Option 1 steps
2. Create a file named `CNAME` in root with your domain:
   ```
   mandatecapital.co.uk
   ```
3. Configure DNS with your domain provider:
   - For apex domain: Add A records pointing to GitHub Pages IPs
   - For subdomain: Add CNAME record pointing to `[username].github.io`
4. Enable "Enforce HTTPS" in repository Settings → Pages

### GitHub Pages IPs (for A records)

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## Payment Integration

The site includes a placeholder for Stripe integration. To enable payments:

### Option A: Stripe Payment Links (Recommended for Static Sites)

1. Create a Payment Link in Stripe Dashboard for £500
2. Replace the submit button action to redirect to the Payment Link
3. Use Stripe webhooks to receive payment confirmations

### Option B: Stripe Checkout (Requires Backend)

1. Set up a serverless function (Vercel, Netlify Functions, AWS Lambda)
2. Create checkout sessions server-side
3. Redirect users to Stripe Checkout
4. Handle webhooks for payment confirmation

See comments in `assets/js/main.js` for implementation details.

## Form Handling

The mandate form currently shows a confirmation message on submit. For production:

### Option A: Third-Party Form Service

- Formspree (formspree.io)
- Basin (usebasin.com)
- Netlify Forms (if hosted on Netlify)

### Option B: Serverless Backend

- Create an API endpoint to receive form data
- Store in database or send via email
- Integrate with payment flow

## Customisation

### Colours

Edit CSS variables in `assets/css/styles.css`:

```css
:root {
    --color-bg: #fafafa;
    --color-accent: #2c3e50;
    /* ... */
}
```

### Contact Email

Update `enquiries@mandatecapital.co.uk` in:
- Footer of all HTML pages
- Terms of Service
- Privacy Policy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

All rights reserved. This code is provided for the exclusive use of Mandate Capital.
