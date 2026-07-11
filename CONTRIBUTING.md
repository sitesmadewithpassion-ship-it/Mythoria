# Mythoria - Contributing Guidelines

Thank you for your interest in contributing to Mythoria! We welcome all contributions that help make this fantasy encyclopedia even more immersive and magical.

## 🎯 How to Contribute

### 1. Report Bugs
- Search existing issues first
- Provide clear description and steps to reproduce
- Include browser, OS, and screenshot if applicable
- Use the bug report template

### 2. Suggest Features
- Check if feature already exists
- Explain use case and benefits
- Provide mockups or examples if helpful
- Engage in discussion

### 3. Submit Code
- Fork the repository
- Create feature branch: `git checkout -b feature/YourFeature`
- Follow code style guidelines
- Test thoroughly
- Submit pull request with description

### 4. Improve Documentation
- Fix typos and errors
- Clarify unclear sections
- Add examples
- Update outdated information

### 5. Create Content
- Add new kingdoms
- Expand spell database
- Create new characters
- Design creatures
- Write lore

## 📋 Code Style Guidelines

### JavaScript
```javascript
// Use clear, descriptive names
const kingdomData = { /* ... */ };

// Comment complex logic
function filterSpells(category, searchTerm) {
    // Filter by category first for performance
    let filtered = spellsData;
    
    if (category !== 'all') {
        filtered = filtered.filter(spell => spell.category === category);
    }
    
    // Then apply search filter
    if (searchTerm) {
        filtered = filtered.filter(spell => 
            spell.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    return filtered;
}

// Use const/let, not var
const value = 'something';

// Use arrow functions when appropriate
const doubled = array.map(x => x * 2);

// Keep functions focused and small
// Aim for single responsibility
```

### CSS
```css
/* Use consistent naming */
.kingdom-card { }
.kingdom-card-header { }
.kingdom-card-content { }

/* Group related properties */
.element {
    /* Layout */
    display: flex;
    justify-content: center;
    
    /* Sizing */
    width: 100%;
    height: auto;
    
    /* Spacing */
    margin: 1rem;
    padding: 1.5rem;
    
    /* Styling */
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    
    /* Effects */
    transition: all 0.3s ease;
}

/* Use CSS variables for consistency */
--primary-dark: #0a0e27;
--accent-cyan: #00d9ff;
```

### HTML
```html
<!-- Use semantic HTML -->
<section id="kingdoms">
    <header class="section-header">
        <h2>The Six Kingdoms</h2>
    </header>
    
    <article class="kingdom-card">
        <!-- Content -->
    </article>
</section>

<!-- Use clear IDs and classes -->
<!-- Avoid inline styles -->
<!-- Keep HTML clean and readable -->
```

## 📁 File Organization

```
Mythoria/
├── index.html           # Keep main HTML focused
├── styles/
│   ├── main.css         # Core layouts and styles
│   ├── animations.css   # All @keyframes and animations
│   └── components.css   # Reusable components
├── js/
│   ├── data.js         # Data only - kingdoms, spells, etc.
│   ├── main.js         # Core functionality
│   └── interactions.js  # Advanced interactions
└── docs/               # Documentation
```

## 🧪 Testing Before Submit

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile (iOS and Android)
- [ ] Test on different screen sizes
- [ ] Check console for errors
- [ ] Verify animations run smoothly
- [ ] Test keyboard navigation
- [ ] Check accessibility
- [ ] Validate HTML/CSS

## 📝 Commit Messages

Use clear, descriptive commit messages:

```
Good:
- Add new spell filtering system
- Fix mobile responsiveness on small screens
- Update kingdom descriptions
- Improve performance on spell search

Avoid:
- "fix stuff"
- "update"
- "asdf"
- "123"
```

## 🔄 Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Commit** with clear messages
6. **Push** to your fork
7. **Submit** Pull Request with:
   - Clear title
   - Description of changes
   - Why these changes matter
   - Screenshots if UI changes
   - Related issues

## 🎨 Adding New Content

### New Kingdom
1. Create data in `kingdomsData` object (js/data.js)
2. Add kingdom card to HTML (index.html)
3. Ensure modal displays correctly
4. Add to world map if applicable
5. Test all interactions

### New Spell
1. Add to `spellsData` array (js/data.js)
2. Follow existing spell structure
3. Choose appropriate category
4. Test filtering and search
5. Verify modal displays

### New Character
1. Add to `charactersData` array (js/data.js)
2. Include all required fields
3. Add appropriate emoji/portrait
4. Test character card rendering
5. Check modal display

### New Creature
1. Add to `creaturesData` array (js/data.js)
2. Include powers and weaknesses
3. Set appropriate threat level
4. Test creature card display
5. Verify modal functionality

## 🚫 What Won't Be Accepted

- Code that breaks existing functionality
- Unrelated changes in one PR
- Code without proper comments
- Changes without testing
- Plagiarized content
- Changes to license

## ✅ Review Process

Your PR will be reviewed for:
- ✓ Code quality
- ✓ Functionality
- ✓ Testing
- ✓ Documentation
- ✓ Performance
- ✓ Accessibility
- ✓ Design consistency

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript Info](https://javascript.info)
- [Web Accessibility](https://www.w3.org/WAI/)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Celebrate contributions
- Report inappropriate behavior

## 📞 Questions?

- Open an issue for discussion
- Email: sites.made.with.passion@gmail.com

## 🎉 Thank You!

Every contribution makes Mythoria better. Whether it's code, content, ideas, or feedback - we appreciate your involvement in building this magical world!

**Together, we're creating something legendary.** ⚔️✨

---

*Last Updated: 2026*
*Happy Contributing!*