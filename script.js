// Subscription data structure
let subscriptions = [];

// Common subscription services with their logos
const commonServices = {
    // Streaming Services
    'Netflix': 'https://logo.clearbit.com/netflix.com',
    'Spotify': 'https://logo.clearbit.com/spotify.com',
    'Amazon Prime': 'https://logo.clearbit.com/amazon.com',
    'Disney+': 'https://logo.clearbit.com/disney.com',
    'HBO Max': 'https://logo.clearbit.com/hbo.com',
    'Apple Music': 'https://logo.clearbit.com/apple.com',
    'YouTube Premium': 'https://logo.clearbit.com/youtube.com',
    'Hulu': 'https://logo.clearbit.com/hulu.com',
    'Paramount+': 'https://logo.clearbit.com/paramount.com',
    'Apple TV+': 'https://logo.clearbit.com/tv.apple.com',
    'Crunchyroll': 'https://logo.clearbit.com/crunchyroll.com',
    'Tidal': 'https://logo.clearbit.com/tidal.com',
    'Deezer': 'https://logo.clearbit.com/deezer.com',
    'Pandora': 'https://logo.clearbit.com/pandora.com',
    'SoundCloud Go+': 'https://logo.clearbit.com/soundcloud.com',
    'Discovery+': 'https://logo.clearbit.com/discovery.com',
    'ESPN+': 'https://logo.clearbit.com/espn.com',
    'Peacock': 'https://logo.clearbit.com/peacocktv.com',
    'Funimation': 'https://logo.clearbit.com/funimation.com',
    'MUBI': 'https://logo.clearbit.com/mubi.com',
    'Shudder': 'https://logo.clearbit.com/shudder.com',
    'BritBox': 'https://logo.clearbit.com/britbox.com',
    'Acorn TV': 'https://logo.clearbit.com/acorn.tv',
    'CuriosityStream': 'https://logo.clearbit.com/curiositystream.com',
    'Nebula': 'https://logo.clearbit.com/nebula.app',
    'Criterion Channel': 'https://logo.clearbit.com/criterionchannel.com',
    'Showtime': 'https://www.sho.com/assets/images/favicon/apple-touch-icon.png',
    'Starz': 'https://logo.clearbit.com/starz.com',
    'AMC+': 'https://logo.clearbit.com/amcplus.com',
    'Vudu': 'https://logo.clearbit.com/vudu.com',
    'Plex Pass': 'https://logo.clearbit.com/plex.tv',
    'Vimeo Premium': 'https://logo.clearbit.com/vimeo.com',
    'FuboTV': 'https://logo.clearbit.com/fubo.tv',
    'Sling TV': 'https://logo.clearbit.com/sling.com',
    'YouTube TV': 'https://logo.clearbit.com/youtube.com',
    'Philo': 'https://logo.clearbit.com/philo.com',
    'DirectTV Stream': 'https://logo.clearbit.com/directv.com',
    'Frndly TV': 'https://logo.clearbit.com/frndlytv.com',
    'Apple Arcade': 'https://logo.clearbit.com/apple.com',
    'Google Play Pass': 'https://logo.clearbit.com/google.com',

    // Gaming Services
    'PlayStation Plus': 'https://logo.clearbit.com/playstation.com',
    'Xbox Game Pass': 'https://logo.clearbit.com/xbox.com',
    'Nintendo Switch Online': 'https://logo.clearbit.com/nintendo.com',
    'EA Play': 'https://logo.clearbit.com/ea.com',
    'Ubisoft+': 'https://logo.clearbit.com/ubisoft.com',
    'GeForce Now': 'https://logo.clearbit.com/nvidia.com',
    'Google Stadia Pro': 'https://logo.clearbit.com/stadia.google.com',
    'Amazon Luna': 'https://logo.clearbit.com/amazon.com',
    'Discord Nitro': 'https://logo.clearbit.com/discord.com',
    'Humble Choice': 'https://logo.clearbit.com/humblebundle.com',
    'Roblox Premium': 'https://logo.clearbit.com/roblox.com',
    'Steam Plus': 'https://logo.clearbit.com/steampowered.com',
    'Epic Games': 'https://logo.clearbit.com/epicgames.com',
    'Blizzard Battle.net': 'https://logo.clearbit.com/blizzard.com',
    'Origin Access': 'https://logo.clearbit.com/origin.com',
    'Rockstar Games': 'https://logo.clearbit.com/rockstargames.com',

    // Productivity & Business
    'Microsoft 365': 'https://logo.clearbit.com/microsoft.com',
    'Adobe Creative Cloud': 'https://logo.clearbit.com/adobe.com',
    'Dropbox': 'https://logo.clearbit.com/dropbox.com',
    'Google Drive': 'https://logo.clearbit.com/google.com',
    'iCloud': 'https://logo.clearbit.com/icloud.com',
    'LinkedIn Premium': 'https://logo.clearbit.com/linkedin.com',
    'Slack': 'https://logo.clearbit.com/slack.com',
    'Zoom Pro': 'https://logo.clearbit.com/zoom.us',
    'Notion': 'https://logo.clearbit.com/notion.so',
    'Canva Pro': 'https://logo.clearbit.com/canva.com',
    'Grammarly': 'https://logo.clearbit.com/grammarly.com',
    'Evernote': 'https://logo.clearbit.com/evernote.com',
    'LastPass': 'https://logo.clearbit.com/lastpass.com',
    'Squarespace': 'https://logo.clearbit.com/squarespace.com',
    'Wix Premium': 'https://logo.clearbit.com/wix.com',
    'Shopify': 'https://logo.clearbit.com/shopify.com',
    'Mailchimp': 'https://logo.clearbit.com/mailchimp.com',
    'Asana': 'https://logo.clearbit.com/asana.com',
    'Trello': 'https://logo.clearbit.com/trello.com',
    'Monday.com': 'https://logo.clearbit.com/monday.com',
    'ClickUp': 'https://logo.clearbit.com/clickup.com',
    'Todoist': 'https://logo.clearbit.com/todoist.com',
    'ProtonMail': 'https://logo.clearbit.com/protonmail.com',
    'Box': 'https://logo.clearbit.com/box.com',
    'Basecamp': 'https://logo.clearbit.com/basecamp.com',
    'Airtable': 'https://logo.clearbit.com/airtable.com',
    'Freshdesk': 'https://logo.clearbit.com/freshdesk.com',
    'Zendesk': 'https://logo.clearbit.com/zendesk.com',
    'HubSpot': 'https://logo.clearbit.com/hubspot.com',
    'Salesforce': 'https://logo.clearbit.com/salesforce.com',
    'Zoho': 'https://logo.clearbit.com/zoho.com',
    'QuickBooks': 'https://logo.clearbit.com/quickbooks.com',
    'FreshBooks': 'https://logo.clearbit.com/freshbooks.com',
    'Wave Pro': 'https://logo.clearbit.com/waveapps.com',
    'Xero': 'https://logo.clearbit.com/xero.com',
    'WebFlow': 'https://logo.clearbit.com/webflow.com',
    'Figma': 'https://static.figma.com/app/icon/1/favicon.svg',
    'InVision': 'https://logo.clearbit.com/invisionapp.com',

    // Security & VPN
    'NordVPN': 'https://logo.clearbit.com/nordvpn.com',
    'ExpressVPN': 'https://logo.clearbit.com/expressvpn.com',
    'Surfshark': 'https://logo.clearbit.com/surfshark.com',
    'CyberGhost': 'https://logo.clearbit.com/cyberghostvpn.com',
    'Dashlane': 'https://logo.clearbit.com/dashlane.com',
    '1Password': 'https://logo.clearbit.com/1password.com',
    'BitWarden': 'https://logo.clearbit.com/bitwarden.com',
    'Norton 360': 'https://logo.clearbit.com/norton.com',
    'McAfee': 'https://logo.clearbit.com/mcafee.com',
    'Avast': 'https://logo.clearbit.com/avast.com',
    'Bitdefender': 'https://logo.clearbit.com/bitdefender.com',
    'Kaspersky': 'https://logo.clearbit.com/kaspersky.com',
    'IPVanish': 'https://logo.clearbit.com/ipvanish.com',
    'Private Internet Access': 'https://logo.clearbit.com/privateinternetaccess.com',
    'TunnelBear': 'https://logo.clearbit.com/tunnelbear.com',
    'Mullvad': 'https://logo.clearbit.com/mullvad.net',
    'ProtonVPN': 'https://logo.clearbit.com/protonvpn.com',
    'Windscribe': 'https://logo.clearbit.com/windscribe.com',
    'AVG': 'https://logo.clearbit.com/avg.com',
    'Malwarebytes': 'https://logo.clearbit.com/malwarebytes.com',
    'ESET': 'https://logo.clearbit.com/eset.com',
    'F-Secure': 'https://logo.clearbit.com/f-secure.com',
    'Trend Micro': 'https://logo.clearbit.com/trendmicro.com',
    'Webroot': 'https://logo.clearbit.com/webroot.com',
    'Sophos': 'https://logo.clearbit.com/sophos.com',

    // Education & Learning
    'Coursera Plus': 'https://logo.clearbit.com/coursera.org',
    'Udemy': 'https://logo.clearbit.com/udemy.com',
    'Skillshare': 'https://logo.clearbit.com/skillshare.com',
    'Codecademy Pro': 'https://logo.clearbit.com/codecademy.com',
    'PluralSight': 'https://logo.clearbit.com/pluralsight.com',
    'LinkedIn Learning': 'https://logo.clearbit.com/linkedin.com',
    'MasterClass': 'https://logo.clearbit.com/masterclass.com',
    'Brilliant': 'https://logo.clearbit.com/brilliant.org',
    'Duolingo Plus': 'https://logo.clearbit.com/duolingo.com',
    'Babbel': 'https://logo.clearbit.com/babbel.com',
    'Rosetta Stone': 'https://logo.clearbit.com/rosettastone.com',
    'Memrise': 'https://logo.clearbit.com/memrise.com',
    'Busuu': 'https://logo.clearbit.com/busuu.com',
    'LingoDeer': 'https://logo.clearbit.com/lingodeer.com',
    'Preply': 'https://logo.clearbit.com/preply.com',
    'iTalki': 'https://logo.clearbit.com/italki.com',
    'Verbling': 'https://logo.clearbit.com/verbling.com',
    'DataCamp': 'https://logo.clearbit.com/datacamp.com',
    'O\'Reilly': 'https://logo.clearbit.com/oreilly.com',
    'FutureLearn': 'https://logo.clearbit.com/futurelearn.com',
    'edX': 'https://logo.clearbit.com/edx.org',
    'Khan Academy': 'https://logo.clearbit.com/khanacademy.org',
    'Udacity': 'https://logo.clearbit.com/udacity.com',
    'Treehouse': 'https://logo.clearbit.com/teamtreehouse.com',
    'Frontend Masters': 'https://logo.clearbit.com/frontendmasters.com',
    'Egghead': 'https://logo.clearbit.com/egghead.io',
    'Vue Mastery': 'https://logo.clearbit.com/vuemastery.com',
    'Vue School': 'https://logo.clearbit.com/vueschool.io',
    'Wes Bos Courses': 'https://logo.clearbit.com/wesbos.com',
    'Level Up Tutorials': 'https://logo.clearbit.com/leveluptutorials.com',

    // Health & Fitness
    'Peloton': 'https://logo.clearbit.com/onepeloton.com',
    'Strava': 'https://logo.clearbit.com/strava.com',
    'Headspace': 'https://logo.clearbit.com/headspace.com',
    'Calm': 'https://logo.clearbit.com/calm.com',
    'FitBit Premium': 'https://logo.clearbit.com/fitbit.com',
    'MyFitnessPal': 'https://logo.clearbit.com/myfitnesspal.com',
    'Nike Training Club': 'https://logo.clearbit.com/nike.com',
    'Beachbody On Demand': 'https://logo.clearbit.com/beachbody.com',
    'Apple Fitness+': 'https://logo.clearbit.com/apple.com',
    'Zwift': 'https://logo.clearbit.com/zwift.com',
    'WHOOP': 'https://logo.clearbit.com/whoop.com',
    'Noom': 'https://logo.clearbit.com/noom.com',
    'Weight Watchers': 'https://logo.clearbit.com/weightwatchers.com',
    'ClassPass': 'https://logo.clearbit.com/classpass.com',
    'Daily Burn': 'https://logo.clearbit.com/dailyburn.com',
    'Aaptiv': 'https://logo.clearbit.com/aaptiv.com',
    'Glo': 'https://logo.clearbit.com/glo.com',
    'CorePower Yoga': 'https://logo.clearbit.com/corepoweryoga.com',
    'Alo Moves': 'https://logo.clearbit.com/alomoves.com',
    'Centr': 'https://logo.clearbit.com/centr.com',
    'Future': 'https://logo.clearbit.com/future.co',
    'Tonal': 'https://logo.clearbit.com/tonal.com',
    'Mirror': 'https://logo.clearbit.com/mirror.co',
    'Hydrow': 'https://logo.clearbit.com/hydrow.com',
    'Echelon': 'https://logo.clearbit.com/echelon.com',
    'Les Mills': 'https://logo.clearbit.com/lesmills.com',
    'Freeletics': 'https://logo.clearbit.com/freeletics.com',
    'Fitbod': 'https://logo.clearbit.com/fitbod.me',
    'Strong': 'https://logo.clearbit.com/strong.app',
    'Stacked': 'https://play-lh.googleusercontent.com/TwCOoU_tqgvXKqupgQ8VYl3B5Cxvsubstitute_stacked_logo_here'
};

// IndexedDB setup
let db;
const DB_NAME = 'SubscriptionTrackerDB';
const STORE_NAME = 'subscriptions';

// Initialize IndexedDB
const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onerror = () => {
            reject('Error opening database');
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            loadSubscriptions(); // Load saved subscriptions when DB is ready
            resolve();
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };
    });
};

// Load subscriptions from IndexedDB
const loadSubscriptions = () => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
        subscriptions = request.result;
        updateSubscriptionList();
        updateStats();
    };
};

// Save subscription to IndexedDB
const saveSubscription = (subscription) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.add(subscription);

        request.onsuccess = () => resolve();
        request.onerror = () => reject('Error saving subscription');
    });
};

// Update subscription in IndexedDB
const updateSubscriptionInDB = (subscription) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put(subscription);

        request.onsuccess = () => resolve();
        request.onerror = () => reject('Error updating subscription');
    });
};

// Delete subscription from IndexedDB
const deleteSubscriptionFromDB = (id) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(id);

        request.onsuccess = () => resolve();
        request.onerror = () => reject('Error deleting subscription');
    });
};

// DOM Elements
const subscriptionModal = document.getElementById('subscriptionModal');
const detailsModal = document.getElementById('subscriptionDetailsModal');
const addNewBtn = document.getElementById('addNewBtn');
const closeBtns = document.querySelectorAll('.close');
const subscriptionForm = document.getElementById('subscriptionForm');
const subscriptionGrid = document.querySelector('.subscription-grid');
const searchInput = document.getElementById('searchSubscription');
const subscriptionList = document.querySelector('.subscription-list');
let selectedService = null;
const deleteConfirmModal = document.getElementById('deleteConfirmModal');
const editSubscriptionModal = document.getElementById('editSubscriptionModal');
const editSubscriptionForm = document.getElementById('editSubscriptionForm');
let subscriptionToDelete = null;

// Event Listeners
addNewBtn.onclick = () => {
    subscriptionModal.style.display = 'block';
    renderSubscriptionGrid();
};

closeBtns.forEach(btn => {
    btn.onclick = () => {
        subscriptionModal.style.display = 'none';
        detailsModal.style.display = 'none';
        selectedService = null;
    };
});

window.onclick = (e) => {
    if (e.target === subscriptionModal) {
        subscriptionModal.style.display = 'none';
    }
    if (e.target === detailsModal) {
        detailsModal.style.display = 'none';
        selectedService = null;
    }
    if (e.target === deleteConfirmModal) {
        closeDeleteModal();
    }
    if (e.target === editSubscriptionModal) {
        editSubscriptionModal.style.display = 'none';
    }
};

// Add this function to check if a subscription is already added
function isSubscriptionAdded(serviceName) {
    return subscriptions.some(sub => 
        sub.service === serviceName && sub.status === 'active'
    );
}

// Update the renderSubscriptionGrid function
function renderSubscriptionGrid(filter = '') {
    subscriptionGrid.innerHTML = '';
    
    // Group services by category
    const categories = {
        'Streaming Services': [],
        'Gaming Services': [],
        'Productivity & Business': [],
        'Security & VPN': [],
        'Education & Learning': [],
        'Health & Fitness': []
    };
    
    Object.entries(commonServices)
        .filter(([name]) => {
            // Filter by search term and exclude already added active subscriptions
            return name.toLowerCase().includes(filter.toLowerCase()) && 
                   !isSubscriptionAdded(name);
        })
        .forEach(([name, logo]) => {
            // Rest of the categorization logic remains the same
            let category = 'Streaming Services';
            if (name.includes('Game') || name.includes('PlayStation') || name.includes('Xbox') || name.includes('Nintendo')) {
                category = 'Gaming Services';
            } else if (name.includes('VPN') || name.includes('Security') || name.includes('Password')) {
                category = 'Security & VPN';
            } else if (name.includes('Office') || name.includes('Cloud') || name.includes('Slack')) {
                category = 'Productivity & Business';
            } else if (name.includes('Course') || name.includes('Learning') || name.includes('Academy')) {
                category = 'Education & Learning';
            } else if (name.includes('Fitness') || name.includes('Health') || name.includes('Workout')) {
                category = 'Health & Fitness';
            }
            
            categories[category].push({ name, logo });
        });
    
    // Only show categories that have available subscriptions
    Object.entries(categories).forEach(([category, services]) => {
        if (services.length > 0) {
            const header = document.createElement('div');
            header.className = 'category-header';
            header.textContent = category;
            subscriptionGrid.appendChild(header);
            
            services.forEach(({ name, logo }) => {
                const option = document.createElement('div');
                option.className = 'subscription-option';
                option.innerHTML = `
                    <img src="${logo}" alt="${name}" onerror="handleImageError(this)">
                    <span>${name}</span>
                `;
                option.onclick = () => selectSubscription(name);
                subscriptionGrid.appendChild(option);
            });
        }
    });

    // Show a message if no subscriptions are available
    if (subscriptionGrid.children.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>${filter ? 'No matching subscriptions found' : 'No available subscriptions'}</h3>
            <p>${filter ? 
                'Try adjusting your search terms or browse all available services.' : 
                'All available subscription services have been added to your list.'}
            </p>
        `;
        subscriptionGrid.appendChild(noResults);
    }
}

// Handle subscription selection
function selectSubscription(serviceName) {
    selectedService = {
        name: serviceName,
        logo: commonServices[serviceName]
    };
    
    document.getElementById('selectedServiceLogo').src = selectedService.logo;
    document.getElementById('selectedServiceName').textContent = serviceName;
    
    subscriptionModal.style.display = 'none';
    detailsModal.style.display = 'block';
    setTodayDate(); // Set today's date when opening the details modal
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    renderSubscriptionGrid(e.target.value);
});

// Initialize the grid
renderSubscriptionGrid();

// Handle form submission
subscriptionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!selectedService) return;

    const subscription = {
        id: Date.now(),
        service: selectedService.name,
        logo: selectedService.logo,
        cost: parseFloat(document.getElementById('cost').value),
        billingCycle: document.getElementById('billingCycle').value,
        startDate: document.getElementById('startDate').value,
        status: 'active'
    };

    try {
        await saveSubscription(subscription);
        subscriptions.push(subscription);
        updateSubscriptionList();
        updateStats();
        detailsModal.style.display = 'none';
        subscriptionForm.reset();
        selectedService = null;
        renderSubscriptionGrid(searchInput.value); // Refresh the grid
    } catch (error) {
        console.error('Error saving subscription:', error);
        alert('Failed to save subscription. Please try again.');
    }
});

// Add this at the top with other variables
let currentFilter = 'all';

// Update the getNextPaymentDate function
function getNextPaymentDate(subscription) {
    if (subscription.status !== 'active') return null;
    
    const startDate = new Date(subscription.startDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Create next payment date starting from the start date
    let nextDate = new Date(startDate);
    nextDate.setHours(0, 0, 0, 0);
    
    if (subscription.billingCycle === 'monthly') {
        // Simply add one month to the start date
        nextDate.setMonth(startDate.getMonth() + 1);
        
        // Keep adding months until we find a date after today
        while (nextDate <= today) {
            nextDate.setMonth(nextDate.getMonth() + 1);
        }
    } else { // yearly
        // Simply add one year to the start date
        nextDate.setFullYear(startDate.getFullYear() + 1);
        
        // Keep adding years until we find a date after today
        while (nextDate <= today) {
            nextDate.setFullYear(nextDate.getFullYear() + 1);
        }
    }
    
    return nextDate;
}

// Update the formatNextPaymentMessage function
function formatNextPaymentMessage(subscription) {
    if (subscription.status !== 'active') return '';
    
    const nextPayment = getNextPaymentDate(subscription);
    if (!nextPayment) return '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Calculate days until payment, accounting for timezone differences
    const nextPaymentTime = nextPayment.getTime();
    const todayTime = today.getTime();
    const daysUntilPayment = Math.ceil((nextPaymentTime - todayTime) / (1000 * 60 * 60 * 24));
    
    let className = 'next-payment';
    if (daysUntilPayment <= 7) className += ' upcoming';
    if (daysUntilPayment <= 0) className += ' overdue';
    
    // Format date string in user's locale
    const dateStr = nextPayment.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric',
        timeZone: 'UTC' // Ensure consistent timezone handling
    });
    
    let message = `Next payment: ${dateStr}`;
    if (daysUntilPayment <= 7 && daysUntilPayment > 0) {
        message += ` (in ${daysUntilPayment} days)`;
    } else if (daysUntilPayment <= 0) {
        const overdueDays = Math.abs(daysUntilPayment);
        message += ` (${overdueDays} ${overdueDays === 1 ? 'day' : 'days'} overdue)`;
    }
    
    return `<div class="${className}"><i class="fas fa-calendar-alt"></i> ${message}</div>`;
}

// Update the toggleStatus function to handle next payment date
async function toggleStatus(id) {
    const subscription = subscriptions.find(sub => sub.id === id);
    const newStatus = subscription.status === 'active' ? 'inactive' : 'active';
    
    // If reactivating, update the start date to today
    if (newStatus === 'active') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        subscription.startDate = `${year}-${month}-${day}`;
    }
    
    subscription.status = newStatus;
    
    try {
        await updateSubscriptionInDB(subscription);
        updateSubscriptionList();
        updateStats();
        renderSubscriptionGrid(searchInput.value);
    } catch (error) {
        console.error('Error updating subscription:', error);
        alert('Failed to update subscription status. Please try again.');
    }
}

// Update the editSubscriptionForm submit handler
editSubscriptionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('editSubscriptionId').value);
    const subscription = subscriptions.find(sub => sub.id === id);
    
    const newStartDate = document.getElementById('editStartDate').value;
    const startDate = new Date(newStartDate);
    startDate.setHours(0, 0, 0, 0);
    
    const updatedSubscription = {
        ...subscription,
        cost: parseFloat(document.getElementById('editCost').value),
        billingCycle: document.getElementById('editBillingCycle').value,
        startDate: newStartDate
    };

    try {
        await updateSubscriptionInDB(updatedSubscription);
        const index = subscriptions.findIndex(sub => sub.id === id);
        subscriptions[index] = updatedSubscription;
        updateSubscriptionList();
        updateStats();
        editSubscriptionModal.style.display = 'none';
    } catch (error) {
        console.error('Error updating subscription:', error);
        alert('Failed to update subscription. Please try again.');
    }
});

// Update the setupDropdowns function to include modal close buttons
function setupDropdowns() {
    // Existing dropdown click handler
    document.addEventListener('click', (e) => {
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target) && 
                !e.target.matches('.dropdown-toggle')) {
                dropdown.classList.remove('show');
            }
        });
    });

    // Add click handlers for all modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                if (modal.id === 'editSubscriptionModal') {
                    editSubscriptionForm.reset();
                }
            }
        });
    });
}

// Add this function to check if it's a new user
function isNewUser() {
    return subscriptions.length === 0;
}

// Update the updateSubscriptionList function
function updateSubscriptionList() {
    subscriptionList.innerHTML = '';
    const addSubscriptionButton = document.querySelector('.add-subscription');
    
    if (isNewUser()) {
        renderWelcomeState();
        addSubscriptionButton.style.display = 'none';
        return;
    }
    
    // Show the button when there are subscriptions
    addSubscriptionButton.style.display = 'flex';
    
    const filteredSubscriptions = subscriptions.filter(sub => {
        if (currentFilter === 'all') return true;
        return sub.status === currentFilter;
    });
    
    filteredSubscriptions.forEach(sub => {
        // Calculate duration
        const startDate = new Date(sub.startDate);
        const currentDate = new Date();
        const monthsDiff = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                          (currentDate.getMonth() - startDate.getMonth());
        
        // Calculate years and remaining months
        const years = Math.floor(monthsDiff / 12);
        const months = monthsDiff % 12;
        
        // Create duration text
        let durationText = '';
        if (years > 0) {
            durationText += `${years} ${years === 1 ? 'year' : 'years'}`;
            if (months > 0) {
                durationText += ` and ${months} ${months === 1 ? 'month' : 'months'}`;
            }
        } else if (months > 0) {
            durationText += `${months} ${months === 1 ? 'month' : 'months'}`;
        } else {
            durationText = 'Less than a month';
        }
        
        // Calculate total amount paid based on billing cycle
        const monthlyAmount = sub.billingCycle === 'yearly' ? sub.cost / 12 : sub.cost;
        const totalPaid = monthlyAmount * monthsDiff;
        
        const item = document.createElement('div');
        item.className = 'subscription-item';
        item.innerHTML = `
            <div class="subscription-info">
                <img src="${sub.logo}" alt="${sub.service}" class="subscription-logo" onerror="handleImageError(this)">
                <div class="subscription-details">
                    <h3>${sub.service}</h3>
                    <p><i class="fas fa-dollar-sign"></i> $${sub.cost} / ${sub.billingCycle}</p>
                    <div class="subscription-dates">
                        <p><i class="fas fa-calendar-check"></i> Started: ${new Date(sub.startDate).toLocaleDateString()}</p>
                        <p class="duration"><i class="fas fa-clock"></i> Duration: ${durationText}</p>
                        <p class="total-paid"><i class="fas fa-receipt"></i> Total paid: $${totalPaid.toFixed(2)}</p>
                    </div>
                    ${formatNextPaymentMessage(sub)}
                </div>
            </div>
            <div class="subscription-actions">
                <span class="subscription-status status-${sub.status}">${sub.status}</span>
                <div class="dropdown">
                    <button class="dropdown-toggle" title="More actions" onclick="toggleDropdown(event, ${sub.id})">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                    <div class="dropdown-menu" id="dropdown-${sub.id}">
                        <div class="dropdown-item" onclick="openEditModal(${sub.id})">
                            <i class="fas fa-edit"></i> Edit
                        </div>
                        <div class="dropdown-item ${sub.status === 'active' ? 'warning' : ''}" 
                             onclick="toggleStatus(${sub.id})">
                            <i class="fas fa-${sub.status === 'active' ? 'ban' : 'redo'}"></i>
                            ${sub.status === 'active' ? 'Cancel' : 'Reactivate'}
                        </div>
                        <div class="dropdown-item danger" onclick="openDeleteModal(${sub.id})">
                            <i class="fas fa-trash"></i> Delete
                        </div>
                    </div>
                </div>
            </div>
        `;
        subscriptionList.appendChild(item);
    });
    
    if (filteredSubscriptions.length === 0) {
        const noSubs = document.createElement('div');
        noSubs.className = 'no-results';
        noSubs.innerHTML = `
            <i class="fas fa-inbox"></i>
            <h3>No subscriptions found</h3>
            <p>${currentFilter === 'all' ? 
                'Click the "New Subscription" button to start tracking your subscriptions.' : 
                `No ${currentFilter} subscriptions to display.`}
            </p>
        `;
        subscriptionList.appendChild(noSubs);
    }
}

// Update the renderWelcomeState function
function renderWelcomeState() {
    // Hide the "New Subscription" button
    document.querySelector('.add-subscription').style.display = 'none';
    
    const welcomeState = document.createElement('div');
    welcomeState.className = 'welcome-state';
    welcomeState.innerHTML = `
        <div class="welcome-content">
            <div class="welcome-header">
                <h1>Welcome to SubTracker</h1>
                <p>The easiest way to manage all your subscriptions in one place</p>
            </div>
            
            <div class="features">
                <div class="feature-item">
                    <i class="fas fa-calculator"></i>
                    <h3>Track Your Spending</h3>
                    <p>Monitor your monthly and yearly subscription costs</p>
                </div>
                <div class="feature-item">
                    <i class="fas fa-clock"></i>
                    <h3>Payment Reminders</h3>
                    <p>Never miss a payment with renewal date tracking</p>
                </div>
                <div class="feature-item">
                    <i class="fas fa-chart-pie"></i>
                    <h3>Smart Analytics</h3>
                    <p>Get insights into your subscription expenses</p>
                </div>
            </div>

            <button onclick="document.getElementById('addNewBtn').click()" class="welcome-button">
                <i class="fas fa-rocket"></i> Get Started
            </button>
        </div>
    `;
    
    subscriptionList.appendChild(welcomeState);
    
    // Hide the filters and stats when showing welcome state
    document.querySelector('.subscription-filters').style.display = 'none';
    document.querySelector('.subscription-stats').style.display = 'none';
}

// Add this function to toggle the dropdown menu
function toggleDropdown(event, id) {
    event.stopPropagation();
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
        if (dropdown.id !== `dropdown-${id}`) {
            dropdown.classList.remove('show');
        }
    });
    const dropdown = document.getElementById(`dropdown-${id}`);
    dropdown.classList.toggle('show');
}

// Delete subscription
async function deleteSubscription(id) {
    try {
        await deleteSubscriptionFromDB(id);
        subscriptions = subscriptions.filter(sub => sub.id !== id);
        updateSubscriptionList();
        updateStats();
        renderSubscriptionGrid(searchInput.value); // Refresh the grid
    } catch (error) {
        console.error('Error deleting subscription:', error);
        alert('Failed to delete subscription. Please try again.');
    }
}

// Update statistics
function updateStats() {
    const statsSection = document.querySelector('.subscription-stats');
    const filtersSection = document.querySelector('.subscription-filters');
    
    if (isNewUser()) {
        statsSection.style.display = 'none';
        filtersSection.style.display = 'none';
        return;
    }
    
    statsSection.style.display = 'grid';
    filtersSection.style.display = 'flex';
    
    const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active');
    
    const monthlyTotal = activeSubscriptions.reduce((total, sub) => {
        return total + (sub.billingCycle === 'monthly' ? sub.cost : sub.cost / 12);
    }, 0);

    const yearlyTotal = monthlyTotal * 12;

    document.getElementById('totalMonthly').textContent = `$${monthlyTotal.toFixed(2)}`;
    document.getElementById('totalYearly').textContent = `$${yearlyTotal.toFixed(2)}`;
    document.getElementById('activeCount').textContent = activeSubscriptions.length;
}

// Initialize the app with IndexedDB
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initDB();
        renderSubscriptionGrid();
        setupDropdowns();
        setupScrollEffect();
        
        const filterButtons = document.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentFilter = button.dataset.filter;
                updateSubscriptionList();
            });
        });
    } catch (error) {
        console.error('Error initializing database:', error);
        alert('Failed to initialize the application. Please refresh the page.');
    }
});

// Set today's date by default in the start date input
function setTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    document.getElementById('startDate').value = `${year}-${month}-${day}`;
}

// Add these new functions for delete confirmation
function openDeleteModal(id) {
    const subscription = subscriptions.find(sub => sub.id === id);
    subscriptionToDelete = subscription;
    
    document.getElementById('deleteServiceLogo').src = subscription.logo;
    document.getElementById('deleteServiceName').textContent = subscription.service;
    deleteConfirmModal.style.display = 'block';
}

function closeDeleteModal() {
    deleteConfirmModal.style.display = 'none';
    subscriptionToDelete = null;
}

async function confirmDelete() {
    if (!subscriptionToDelete) return;
    
    try {
        await deleteSubscriptionFromDB(subscriptionToDelete.id);
        subscriptions = subscriptions.filter(sub => sub.id !== subscriptionToDelete.id);
        updateSubscriptionList();
        updateStats();
        renderSubscriptionGrid(searchInput.value);
        closeDeleteModal();
    } catch (error) {
        console.error('Error deleting subscription:', error);
        alert('Failed to delete subscription. Please try again.');
    }
}

// Add these new functions for editing
function openEditModal(id) {
    const subscription = subscriptions.find(sub => sub.id === id);
    
    document.getElementById('editSubscriptionId').value = subscription.id;
    document.getElementById('editServiceLogo').src = subscription.logo;
    document.getElementById('editServiceName').textContent = subscription.service;
    document.getElementById('editCost').value = subscription.cost;
    document.getElementById('editBillingCycle').value = subscription.billingCycle;
    document.getElementById('editStartDate').value = subscription.startDate;
    
    editSubscriptionModal.style.display = 'block';
}

// Add this new function for header scroll effect
function setupScrollEffect() {
    const navbar = document.querySelector('.site-header');
    if (!navbar) return; // Guard clause in case element isn't found
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Add this function to handle image loading errors
function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    img.src = './favicon/favicon.svg'; // Path to your default fallback image
} 