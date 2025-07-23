const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 299,
    originalPrice: 399,
    category: "electronics",
    rating: 4.5,
    reviews: 1247,
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    badge: "Best Seller",
    inStock: true,
    features: ["Active Noise Cancellation", "30hr Battery", "Quick Charge", "Bluetooth 5.0"],
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt",
    price: 29,
    originalPrice: 45,
    category: "clothing",
    rating: 4.2,
    reviews: 892,
    description: "Comfortable 100% organic cotton t-shirt available in multiple colors",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    badge: "Eco-Friendly",
    inStock: true,
    features: ["100% Organic Cotton", "Pre-shrunk", "Machine Washable", "Multiple Colors"],
  },
  {
    id: 3,
    name: "JavaScript: The Complete Guide",
    price: 45,
    originalPrice: 65,
    category: "books",
    rating: 4.8,
    reviews: 2156,
    description: "Comprehensive guide to modern JavaScript programming with practical examples",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&crop=center",
    badge: "New Release",
    inStock: true,
    features: ["600+ Pages", "Code Examples", "Online Resources", "Expert Author"],
  },
  {
    id: 4,
    name: "Professional Garden Tool Set",
    price: 89,
    originalPrice: 120,
    category: "home",
    rating: 4.3,
    reviews: 567,
    description: "Complete set of essential gardening tools with ergonomic handles",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
    badge: "Popular",
    inStock: true,
    features: ["Ergonomic Design", "Rust Resistant", "Storage Bag", "Lifetime Warranty"],
  },
  {
    id: 5,
    name: "Ultra-Light Running Shoes",
    price: 129,
    originalPrice: 180,
    category: "sports",
    rating: 4.6,
    reviews: 1834,
    description: "Lightweight running shoes with advanced cushioning technology",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    badge: "Top Rated",
    inStock: true,
    features: ["Ultra-Light", "Breathable Mesh", "Advanced Cushioning", "Multiple Sizes"],
  },
  {
    id: 6,
    name: "Latest Smartphone Pro",
    price: 699,
    originalPrice: 899,
    category: "electronics",
    rating: 4.4,
    reviews: 3421,
    description: "Flagship smartphone with triple camera system and 5G connectivity",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    badge: "Limited Offer",
    inStock: true,
    features: ["Triple Camera", "5G Ready", "256GB Storage", "Wireless Charging"],
  },
  {
    id: 7,
    name: "Designer Denim Jeans",
    price: 79,
    originalPrice: 120,
    category: "clothing",
    rating: 4.1,
    reviews: 445,
    description: "Premium quality denim jeans with modern fit and sustainable materials",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    badge: "Sustainable",
    inStock: true,
    features: ["Sustainable Denim", "Modern Fit", "Stretch Comfort", "Multiple Washes"],
  },
  {
    id: 8,
    name: "Culinary Masterclass Cookbook",
    price: 35,
    originalPrice: 50,
    category: "books",
    rating: 4.7,
    reviews: 1123,
    description: "Professional cooking techniques and recipes from world-renowned chefs",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center",
    badge: "Chef's Choice",
    inStock: true,
    features: ["200+ Recipes", "Step-by-Step Photos", "Chef Tips", "Hardcover"],
  },
  {
    id: 9,
    name: "Smart LED Desk Lamp",
    price: 55,
    originalPrice: 75,
    category: "home",
    rating: 4.0,
    reviews: 234,
    description: "Adjustable LED desk lamp with wireless charging pad and USB ports",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
    badge: "Smart Home",
    inStock: true,
    features: ["Wireless Charging", "USB Ports", "Touch Control", "Eye Protection"],
  },
  {
    id: 10,
    name: "Premium Yoga Mat",
    price: 39,
    originalPrice: 60,
    category: "sports",
    rating: 4.5,
    reviews: 876,
    description: "Non-slip yoga mat made from eco-friendly materials with alignment guides",
    image: "https://images.unsplash.com/photo-1544367567-00167b16eac5?w=400&h=400&fit=crop&crop=center",
    badge: "Eco-Friendly",
    inStock: true,
    features: ["Non-Slip Surface", "Eco-Friendly", "Alignment Guides", "Carrying Strap"],
  },
  {
    id: 11,
    name: "Gaming Laptop Pro",
    price: 899,
    originalPrice: 1199,
    category: "electronics",
    rating: 4.3,
    reviews: 567,
    description: "High-performance gaming laptop with RTX graphics and RGB keyboard",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop&crop=center",
    badge: "Gaming",
    inStock: true,
    features: ["RTX Graphics", "RGB Keyboard", "16GB RAM", "1TB SSD"],
  },
  {
    id: 12,
    name: "Winter Parka Jacket",
    price: 159,
    originalPrice: 220,
    category: "clothing",
    rating: 4.4,
    reviews: 332,
    description: "Insulated winter jacket with water-resistant coating and removable hood",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
    badge: "Winter Ready",
    inStock: true,
    features: ["Water Resistant", "Insulated", "Removable Hood", "Multiple Pockets"],
  },
  {
    id: 13,
    name: "Bluetooth Speaker",
    price: 79,
    originalPrice: 120,
    category: "electronics",
    rating: 4.2,
    reviews: 445,
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
    badge: "Waterproof",
    inStock: true,
    features: ["360° Sound", "Waterproof", "12hr Battery", "Voice Assistant"],
  },
  {
    id: 14,
    name: "Fitness Tracker Watch",
    price: 199,
    originalPrice: 299,
    category: "sports",
    rating: 4.6,
    reviews: 1234,
    description: "Advanced fitness tracker with heart rate monitoring and GPS",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    badge: "Health Tech",
    inStock: true,
    features: ["Heart Rate Monitor", "GPS Tracking", "Sleep Analysis", "Water Resistant"],
  },
  {
    id: 15,
    name: "Coffee Table Book: Architecture",
    price: 65,
    originalPrice: 95,
    category: "books",
    rating: 4.5,
    reviews: 234,
    description: "Stunning photography of modern architecture from around the world",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
    badge: "Art & Design",
    inStock: true,
    features: ["Large Format", "Premium Paper", "300+ Photos", "Hardcover"],
  },
  {
    id: 16,
    name: "Wireless Mouse",
    price: 49,
    originalPrice: 69,
    category: "electronics",
    rating: 4.3,
    reviews: 789,
    description: "Ergonomic wireless mouse with precision tracking and long battery life",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    badge: "Ergonomic",
    inStock: true,
    features: ["Wireless", "Ergonomic Design", "Precision Tracking", "Long Battery"],
  },
  {
    id: 17,
    name: "Leather Wallet",
    price: 89,
    originalPrice: 120,
    category: "clothing",
    rating: 4.7,
    reviews: 456,
    description: "Handcrafted genuine leather wallet with RFID blocking technology",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    badge: "Handcrafted",
    inStock: true,
    features: ["Genuine Leather", "RFID Blocking", "Multiple Compartments", "Slim Design"],
  },
  {
    id: 18,
    name: "Coffee Maker",
    price: 149,
    originalPrice: 199,
    category: "home",
    rating: 4.4,
    reviews: 623,
    description: "Programmable coffee maker with thermal carafe and auto-brew feature",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&crop=center",
    badge: "Kitchen Essential",
    inStock: true,
    features: ["Programmable", "Thermal Carafe", "Auto-Brew", "12-Cup Capacity"],
  },
  {
    id: 19,
    name: "Basketball",
    price: 35,
    originalPrice: 50,
    category: "sports",
    rating: 4.5,
    reviews: 234,
    description: "Official size basketball with superior grip and durability",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop&crop=center",
    badge: "Official Size",
    inStock: true,
    features: ["Official Size", "Superior Grip", "Durable", "Indoor/Outdoor"],
  },
  {
    id: 20,
    name: "Photography Book",
    price: 55,
    originalPrice: 75,
    category: "books",
    rating: 4.6,
    reviews: 345,
    description: "Stunning collection of landscape photography from around the world",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center",
    badge: "Visual Art",
    inStock: true,
    features: ["High-Quality Prints", "Landscape Photography", "Coffee Table Size", "Hardcover"],
  },
]

// Add responsive utilities at the top of the file
const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1200,
}

let currentBreakpoint = getCurrentBreakpoint()

function getCurrentBreakpoint() {
  const width = window.innerWidth
  if (width <= BREAKPOINTS.mobile) return "mobile"
  if (width <= BREAKPOINTS.tablet) return "tablet"
  if (width <= BREAKPOINTS.desktop) return "desktop"
  return "large"
}

function handleResponsiveChanges() {
  const newBreakpoint = getCurrentBreakpoint()

  if (newBreakpoint !== currentBreakpoint) {
    currentBreakpoint = newBreakpoint

    // Adjust displayed products based on screen size
    if (currentBreakpoint === "mobile") {
      displayedProducts = Math.min(displayedProducts, 6)
    } else if (currentBreakpoint === "tablet") {
      displayedProducts = Math.min(displayedProducts, 9)
    }

    // Close sidebars on mobile orientation change
    if (currentBreakpoint === "mobile") {
      closeAllSidebars()
    }

    // Re-render products with new layout
    renderProducts()
  }
}

// Global state - fix cart initialization
let cart = []
let wishlist = []
let currentCategory = "all"
let currentMinPrice = 0
let currentMaxPrice = 1000
let currentRating = 0
let searchQuery = ""
let currentSort = "name"
let displayedProducts = 12
let filteredProducts = []
let currentView = "grid"

// Initialize cart and wishlist from localStorage
function initializeStorage() {
  try {
    cart = JSON.parse(localStorage.getItem("cart")) || []
    wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
  } catch (error) {
    console.error("Error loading from localStorage:", error)
    cart = []
    wishlist = []
  }
}

// DOM elements
const loadingScreen = document.getElementById("loadingScreen")
const productsGrid = document.getElementById("productsGrid")
const categoryFilters = document.getElementById("categoryFilters")
const minPriceRange = document.getElementById("minPriceRange")
const maxPriceRange = document.getElementById("maxPriceRange")
const priceDisplay = document.getElementById("priceDisplay")
const sortSelect = document.getElementById("sortSelect")
const ratingFilter = document.getElementById("ratingFilter")
const searchInput = document.getElementById("searchInput")
const resultsInfo = document.getElementById("resultsInfo")
const noResults = document.getElementById("noResults")
const clearFilters = document.getElementById("clearFilters")
const resetFilters = document.getElementById("resetFilters")
const loadMoreBtn = document.getElementById("loadMoreBtn")
const loadMoreSection = document.getElementById("loadMoreSection")
const viewBtns = document.querySelectorAll(".view-btn")
const body = document.body
const cartBtn = document.getElementById("cartBtn")
const wishlistBtn = document.getElementById("wishlistBtn")
const cartSidebar = document.getElementById("cartSidebar")
const wishlistSidebar = document.getElementById("wishlistSidebar")
const overlay = document.getElementById("overlay")
const productModal = document.getElementById("productModal")

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize storage first
  initializeStorage()

  // Hide loading screen after a short delay
  setTimeout(() => {
    loadingScreen.style.opacity = "0"
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 500)
  }, 1500)

  initializeTheme()
  updateCartCount()
  updateWishlistCount()
  filterProducts()
  setupEventListeners()
})

// Theme toggle functionality
// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", currentTheme)
updateThemeToggleText(currentTheme)

function updateThemeToggleText(theme) {
  document.getElementById("themeToggle").textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark"
}

function toggleTheme() {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeToggleText(newTheme)
}

// Theme management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.body.setAttribute("data-theme", savedTheme)
  updateThemeToggleText(savedTheme)
}

// Event listeners setup
function setupEventListeners() {
  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)

  // Category filters
  categoryFilters.addEventListener("click", handleCategoryFilter)

  // Price range
  minPriceRange.addEventListener("input", handlePriceChange)
  maxPriceRange.addEventListener("input", handlePriceChange)

  // Sort and rating
  sortSelect.addEventListener("change", handleSortChange)
  ratingFilter.addEventListener("change", handleRatingChange)

  // Search
  searchInput.addEventListener("input", debounce(handleSearch, 300))

  // View toggle
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", handleViewToggle)
  })

  // Clear and reset filters
  clearFilters.addEventListener("click", clearAllFilters)
  resetFilters.addEventListener("click", clearAllFilters)

  // Load more
  loadMoreBtn.addEventListener("click", loadMoreProducts)

  // Cart and wishlist
  cartBtn.addEventListener("click", toggleCartSidebar)
  wishlistBtn.addEventListener("click", toggleWishlistSidebar)

  // Close sidebars
  document.getElementById("closeCart").addEventListener("click", closeCartSidebar)
  document.getElementById("closeWishlist").addEventListener("click", closeWishlistSidebar)
  document.getElementById("closeModal").addEventListener("click", closeProductModal)

  // Overlay
  overlay.addEventListener("click", closeAllSidebars)

  // Products grid
  productsGrid.addEventListener("click", handleProductClick)

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyboardNavigation)
  // Add window resize listener
  window.addEventListener("resize", debounce(handleResponsiveChanges, 250))

  // Add touch event handling for mobile
  function addTouchSupport() {
    if ("ontouchstart" in window) {
      document.body.classList.add("touch-device")

      // Add touch-friendly product card interactions
      productsGrid.addEventListener("touchstart", (e) => {
        const productCard = e.target.closest(".product-card")
        if (productCard) {
          productCard.classList.add("touch-active")
        }
      })

      productsGrid.addEventListener("touchend", (e) => {
        const productCard = e.target.closest(".product-card")
        if (productCard) {
          setTimeout(() => {
            productCard.classList.remove("touch-active")
          }, 150)
        }
      })
    }
  }

  // Add mobile-specific search behavior
  function handleMobileSearch() {
    if (currentBreakpoint === "mobile") {
      searchInput.addEventListener("focus", () => {
        // Scroll to search input on mobile
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" })
      })
    }
  }

  // Add swipe gesture support for sidebars
  function addSwipeSupport() {
    let startX = 0
    let startY = 0

    document.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    })

    document.addEventListener("touchmove", (e) => {
      if (!startX || !startY) return

      const currentX = e.touches[0].clientX
      const currentY = e.touches[0].clientY

      const diffX = startX - currentX
      const diffY = startY - currentY

      // Only handle horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Swipe left to close sidebars
        if (diffX > 50 && (cartSidebar.classList.contains("open") || wishlistSidebar.classList.contains("open"))) {
          closeAllSidebars()
        }
      }
    })

    document.addEventListener("touchend", () => {
      startX = 0
      startY = 0
    })
  }

  addTouchSupport()
  handleMobileSearch()
  addSwipeSupport()
  handleResponsiveChanges()
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let starsHTML = ""

  for (let i = 0; i < fullStars; i++) {
    starsHTML += "★"
  }
  if (hasHalfStar) {
    starsHTML += "☆"
  }
  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    starsHTML += "☆"
  }

  return starsHTML
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

function calculateDiscount(original, current) {
  return Math.round(((original - current) / original) * 100)
}

// Filter and search functions
function handleCategoryFilter(e) {
  if (e.target.classList.contains("category-btn")) {
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.classList.remove("active")
    })

    e.target.classList.add("active")
    currentCategory = e.target.dataset.category
    displayedProducts = 12
    filterProducts()
  }
}

// Fix price range handling
function handlePriceChange() {
  currentMinPrice = Number.parseInt(minPriceRange.value)
  currentMaxPrice = Number.parseInt(maxPriceRange.value)

  // Ensure min is not greater than max
  if (currentMinPrice > currentMaxPrice) {
    if (event.target === minPriceRange) {
      currentMaxPrice = currentMinPrice
      maxPriceRange.value = currentMaxPrice
    } else {
      currentMinPrice = currentMaxPrice
      minPriceRange.value = currentMinPrice
    }
  }

  priceDisplay.textContent = `${formatPrice(currentMinPrice)} - ${formatPrice(currentMaxPrice)}`
  displayedProducts = 12
  filterProducts()
}

function handleSortChange(e) {
  currentSort = e.target.value
  sortProducts()
}

function handleRatingChange(e) {
  currentRating = Number.parseFloat(e.target.value)
  displayedProducts = 12
  filterProducts()
}

function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase().trim()
  displayedProducts = 12
  filterProducts()
}

function handleViewToggle(e) {
  viewBtns.forEach((btn) => btn.classList.remove("active"))
  e.target.classList.add("active")
  currentView = e.target.dataset.view

  if (currentView === "list") {
    productsGrid.classList.add("list-view")
  } else {
    productsGrid.classList.remove("list-view")
  }
}

function clearAllFilters() {
  currentCategory = "all"
  currentMinPrice = 0
  currentMaxPrice = 1000
  currentRating = 0
  searchQuery = ""
  currentSort = "name"
  displayedProducts = 12

  // Reset UI
  document.querySelector('.category-btn[data-category="all"]').classList.add("active")
  document.querySelectorAll('.category-btn:not([data-category="all"])').forEach((btn) => {
    btn.classList.remove("active")
  })

  minPriceRange.value = 0
  maxPriceRange.value = 1000
  priceDisplay.textContent = `${formatPrice(0)} - ${formatPrice(1000)}`
  ratingFilter.value = 0
  searchInput.value = ""
  sortSelect.value = "name"

  filterProducts()
}

// Product filtering and sorting
function filterProducts() {
  filteredProducts = products.filter((product) => {
    const categoryMatch = currentCategory === "all" || product.category === currentCategory
    const priceMatch = product.price >= currentMinPrice && product.price <= currentMaxPrice
    const ratingMatch = product.rating >= currentRating
    const searchMatch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)

    return categoryMatch && priceMatch && ratingMatch && searchMatch
  })

  sortProducts()
  updateFilterUI()
}

function sortProducts() {
  filteredProducts.sort((a, b) => {
    switch (currentSort) {
      case "name":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      case "price":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "rating":
        return a.rating - b.rating
      case "rating-desc":
        return b.rating - a.rating
      case "popularity":
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  renderProducts()
}

function updateFilterUI() {
  const hasActiveFilters =
    currentCategory !== "all" ||
    currentMinPrice > 0 ||
    currentMaxPrice < 1000 ||
    currentRating > 0 ||
    searchQuery !== ""

  clearFilters.style.display = hasActiveFilters ? "block" : "none"
}

// Product rendering - FIXED IMAGE LOADING
function renderProducts() {
  const productsToShow = filteredProducts.slice(0, displayedProducts)

  if (productsToShow.length === 0) {
    productsGrid.style.display = "none"
    noResults.style.display = "block"
    loadMoreSection.style.display = "none"
    resultsInfo.querySelector(".results-text").textContent = "No products found"
    return
  }

  productsGrid.style.display = "grid"
  noResults.style.display = "none"

  productsGrid.innerHTML = productsToShow
    .map((product) => {
      const discount = product.originalPrice ? calculateDiscount(product.originalPrice, product.price) : 0
      const isInWishlist = wishlist.some((item) => item.id === product.id)
      const isInCart = cart.some((item) => item.id === product.id)

      return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" onload="this.style.opacity=1" onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center'; this.style.opacity=1;">
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ""}
          <div class="product-actions">
            <button class="action-btn wishlist-btn ${isInWishlist ? "active" : ""}" data-id="${product.id}" title="Add to Wishlist">
              ❤️
            </button>
            <button class="action-btn quick-view-btn" data-id="${product.id}" title="Quick View">
              👁️
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-price">
            <span class="current-price">${formatPrice(product.price)}</span>
            ${
              product.originalPrice
                ? `
              <span class="original-price">${formatPrice(product.originalPrice)}</span>
              <span class="discount">${discount}% OFF</span>
            `
                : ""
            }
          </div>
          <div class="product-rating">
            <span class="stars">${generateStars(product.rating)}</span>
            <span class="rating-text">${product.rating}/5 (${product.reviews})</span>
          </div>
          <p class="product-description">${product.description}</p>
          <div class="product-footer">
            <button class="add-to-cart-btn ${isInCart ? "in-cart" : ""}" data-id="${product.id}">
              ${isInCart ? "✓ In Cart" : "🛒 Add to Cart"}
            </button>
            <button class="quick-view-btn" data-id="${product.id}">
              👁️ View
            </button>
          </div>
        </div>
      </div>
    `
    })
    .join("")

  // Update results info
  const categoryText = currentCategory === "all" ? "all categories" : currentCategory
  const searchText = searchQuery ? ` matching "${searchQuery}"` : ""
  resultsInfo.querySelector(".results-text").textContent =
    `Showing ${productsToShow.length} of ${filteredProducts.length} products in ${categoryText}${searchText}`

  // Show/hide load more button
  if (filteredProducts.length > displayedProducts) {
    loadMoreSection.style.display = "block"
    loadMoreBtn.textContent = `Load More (${filteredProducts.length - displayedProducts} remaining)`
  } else {
    loadMoreSection.style.display = "none"
  }

  // Add staggered animation and setup image loading
  setTimeout(() => {
    const productCards = document.querySelectorAll(".product-card")
    productCards.forEach((card, index) => {
      card.style.animationDelay = `${(index % 12) * 0.1}s`
    })

    // Setup image loading for newly rendered products
    setupImageLoading()
  }, 50)
}

// Improved image loading function
function setupImageLoading() {
  const images = document.querySelectorAll(".product-image img")

  images.forEach((img) => {
    // If image is already loaded, show it
    if (img.complete && img.naturalHeight !== 0) {
      img.style.opacity = "1"
      return
    }

    // Set initial opacity to 0 for fade-in effect
    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"

    // Handle successful load
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    // Handle error with fallback
    img.addEventListener("error", function () {
      this.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center"
      this.style.opacity = "1"
    })
  })
}

function loadMoreProducts() {
  displayedProducts += 12
  renderProducts()
}

// Product interactions - fix event handling
function handleProductClick(e) {
  e.preventDefault()
  e.stopPropagation()

  const productCard = e.target.closest(".product-card")
  if (!productCard) return

  const productId = Number.parseInt(productCard.dataset.id)
  const product = products.find((p) => p.id === productId)

  if (e.target.classList.contains("wishlist-btn") || e.target.closest(".wishlist-btn")) {
    toggleWishlist(productId)
  } else if (e.target.classList.contains("add-to-cart-btn") || e.target.closest(".add-to-cart-btn")) {
    addToCart(productId)
  } else if (e.target.classList.contains("quick-view-btn") || e.target.closest(".quick-view-btn")) {
    showProductModal(product)
  } else if (!e.target.closest(".product-actions") && !e.target.closest(".product-footer")) {
    showProductModal(product)
  }
}

// Cart functionality
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  updateCartUI()
  renderProducts() // Re-render to update button states

  // Show success feedback
  showNotification(`${product.name} added to cart!`, "success")
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  updateCartUI()
  renderProducts()
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
      localStorage.setItem("cart", JSON.stringify(cart))
      updateCartCount()
      updateCartUI()
    }
  }
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  document.getElementById("cartCount").textContent = totalItems
}

function updateCartUI() {
  const cartItems = document.getElementById("cartItems")

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty</p>
        <span class="empty-cart-icon">🛒</span>
      </div>
    `
    document.getElementById("cartTotal").textContent = "$0.00"
    return
  }

  const cartHTML = cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" onload="this.style.opacity=1" onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center'; this.style.opacity=1;">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `,
    )
    .join("")

  cartItems.innerHTML = cartHTML

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  document.getElementById("cartTotal").textContent = formatPrice(total)
}

// Wishlist functionality
function toggleWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  const existingIndex = wishlist.findIndex((item) => item.id === productId)

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1)
    showNotification(`${product.name} removed from wishlist`, "info")
  } else {
    wishlist.push(product)
    showNotification(`${product.name} added to wishlist!`, "success")
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist))
  updateWishlistCount()
  updateWishlistUI()
  renderProducts() // Re-render to update button states
}

function updateWishlistCount() {
  document.getElementById("wishlistCount").textContent = wishlist.length
}

function updateWishlistUI() {
  const wishlistItems = document.getElementById("wishlistItems")

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="empty-wishlist">
        <p>Your wishlist is empty</p>
        <span class="empty-wishlist-icon">❤️</span>
      </div>
    `
    return
  }

  const wishlistHTML = wishlist
    .map(
      (item) => `
    <div class="wishlist-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="wishlist-item-image" onload="this.style.opacity=1" onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center'; this.style.opacity=1;">
      <div class="wishlist-item-info">
        <h4>${item.name}</h4>
        <p class="wishlist-item-price">${formatPrice(item.price)}</p>
        <button class="add-to-cart-from-wishlist" onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
      <button class="remove-wishlist-item" onclick="toggleWishlist(${item.id})">✕</button>
    </div>
  `,
    )
    .join("")

  wishlistItems.innerHTML = wishlistHTML
}

function toggleCartSidebar() {
  cartSidebar.classList.toggle("open")
  overlay.classList.toggle("active")
  updateCartUI()
}

function toggleWishlistSidebar() {
  wishlistSidebar.classList.toggle("open")
  overlay.classList.toggle("active")
  updateWishlistUI()
}

function closeCartSidebar() {
  cartSidebar.classList.remove("open")
  overlay.classList.remove("active")
}

function closeWishlistSidebar() {
  wishlistSidebar.classList.remove("open")
  overlay.classList.remove("active")
}

function closeAllSidebars() {
  cartSidebar.classList.remove("open")
  wishlistSidebar.classList.remove("open")
  productModal.classList.remove("open")
  overlay.classList.remove("active")

  document.body.style.overflow = ""
}

const showProductModal = (product) => {
  if (currentBreakpoint === "mobile") {
    document.body.style.overflow = "hidden"
  }
  const modalBody = document.getElementById("modalBody")
  const discount = product.originalPrice ? calculateDiscount(product.originalPrice, product.price) : 0
  const isInWishlist = wishlist.some((item) => item.id === product.id)
  const isInCart = cart.some((item) => item.id === product.id)

  modalBody.innerHTML = `
    <div class="modal-product">
      <div class="modal-product-image">
        <img src="${product.image}" alt="${product.name}" onload="this.style.opacity=1" onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center'; this.style.opacity=1;">
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ""}
      </div>
      <div class="modal-product-info">
        <span class="product-category">${product.category}</span>
        <h2 class="modal-product-name">${product.name}</h2>
        <div class="modal-product-price">
          <span class="current-price">${formatPrice(product.price)}</span>
          ${
            product.originalPrice
              ? `
            <span class="original-price">${formatPrice(product.originalPrice)}</span>
            <span class="discount">${discount}% OFF</span>
          `
              : ""
          }
        </div>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-text">${product.rating}/5 (${product.reviews} reviews)</span>
        </div>
        <p class="modal-product-description">${product.description}</p>
        <div class="product-features">
          <h4>Key Features:</h4>
          <ul>
            ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </div>
        <div class="modal-product-actions">
          <button class="add-to-cart-btn ${isInCart ? "in-cart" : ""}" onclick="addToCart(${product.id})">
            ${isInCart ? "✓ In Cart" : "🛒 Add to Cart"}
          </button>
          <button class="wishlist-btn ${isInWishlist ? "active" : ""}" onclick="toggleWishlist(${product.id})">
            ❤️ ${isInWishlist ? "In Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  `

  productModal.classList.add("open")
  overlay.classList.add("active")
}

const closeProductModal = () => {
  document.body.style.overflow = ""
}

// Notifications
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--${type === "success" ? "success" : type === "error" ? "error" : "primary"}-color);
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  setTimeout(() => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
  if (e.key === "Escape") {
    closeAllSidebars()
  }

  if (e.key === "/" && !e.target.matches("input, textarea")) {
    e.preventDefault()
    searchInput.focus()
  }
}

// Performance optimizations
// Lazy loading images
function setupLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          observer.unobserve(img)
        }
      })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

const additionalStyles = `
  .cart-item, .wishlist-item {
    display: flex;
    gap: 15px;
    padding: 15px;
    border-bottom: 1px solid var(--border-color);
    align-items: center;
  }
  
  .cart-item-image, .wishlist-item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .cart-item-info, .wishlist-item-info {
    flex: 1;
  }
  
  .cart-item-info h4, .wishlist-item-info h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--text-primary);
  }
  
  .cart-item-price, .wishlist-item-price {
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 8px;
  }
  
  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .quantity-btn {
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 600;
  }
  
  .quantity {
    font-weight: 600;
    min-width: 20px;
    text-align: center;
  }
  
  .remove-item, .remove-wishlist-item {
    background: var(--error-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .add-to-cart-from-wishlist {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
  
  .modal-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 30px;
  }
  
  .modal-product-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .modal-product-name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--text-primary);
  }
  
  .modal-product-price {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
  }
  
  .modal-product-description {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: var(--text-secondary);
  }
  
  .product-features {
    margin-bottom: 25px;
  }
  
  .product-features h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--text-primary);
  }
  
  .product-features ul {
    list-style: none;
    padding: 0;
  }
  
  .product-features li {
    padding: 5px 0;
    color: var(--text-secondary);
    position: relative;
    padding-left: 20px;
  }
  
  .product-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--success-color);
    font-weight: 600;
  }
  
  .modal-product-actions {
    display: flex;
    gap: 15px;
  }
  
  .modal-product-actions button {
    flex: 1;
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
  }
  
  @media (max-width: 768px) {
    .modal-product {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 20px;
    }
    
    .modal-product-image img {
      height: 250px;
    }
    
    .modal-product-actions {
      flex-direction: column;
    }
  }
`

// Inject additional styles
const styleSheet = document.createElement("style")
styleSheet.textContent = additionalStyles
document.head.appendChild(styleSheet)
