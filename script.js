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
    'Showtime': 'https://logo.clearbit.com/showtime.com',
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
    'Figma': 'https://logo.clearbit.com/figma.com',
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
    'Stacked': 'https://logo.clearbit.com/stacked.app'
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
                    <img src="${logo}" alt="${name}" onerror="this.src='default-logo.png'">
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
        noResults.textContent = filter ? 
            'No matching subscriptions found.' : 
            'No available subscriptions to add.';
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

// Add this function to calculate next payment date
function getNextPaymentDate(subscription) {
    if (subscription.status !== 'active') return null;
    
    const startDate = new Date(subscription.startDate);
    const today = new Date();
    
    if (subscription.billingCycle === 'monthly') {
        let nextDate = new Date(startDate);
        while (nextDate <= today) {
            nextDate.setMonth(nextDate.getMonth() + 1);
        }
        return nextDate;
    } else { // yearly
        let nextDate = new Date(startDate);
        while (nextDate <= today) {
            nextDate.setFullYear(nextDate.getFullYear() + 1);
        }
        return nextDate;
    }
}

// Add this function to format the next payment message
function formatNextPaymentMessage(subscription) {
    if (subscription.status !== 'active') return '';
    
    const nextPayment = getNextPaymentDate(subscription);
    if (!nextPayment) return '';
    
    const today = new Date();
    const daysUntilPayment = Math.ceil((nextPayment - today) / (1000 * 60 * 60 * 24));
    
    let className = 'next-payment';
    if (daysUntilPayment <= 7) className += ' upcoming';
    if (daysUntilPayment <= 0) className += ' overdue';
    
    const dateStr = nextPayment.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });
    
    let message = `Next payment: ${dateStr}`;
    if (daysUntilPayment <= 7 && daysUntilPayment > 0) {
        message += ` (in ${daysUntilPayment} days)`;
    } else if (daysUntilPayment <= 0) {
        message += ' (overdue)';
    }
    
    return `<div class="${className}"><i class="fas fa-calendar-alt"></i> ${message}</div>`;
}

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

// Update the updateSubscriptionList function to improve the dropdown button UI
function updateSubscriptionList() {
    subscriptionList.innerHTML = '';
    
    const filteredSubscriptions = subscriptions.filter(sub => {
        if (currentFilter === 'all') return true;
        return sub.status === currentFilter;
    });
    
    filteredSubscriptions.forEach(sub => {
        const item = document.createElement('div');
        item.className = 'subscription-item';
        item.innerHTML = `
            <div class="subscription-info">
                <img src="${sub.logo}" alt="${sub.service}" class="subscription-logo">
                <div class="subscription-details">
                    <h3>${sub.service}</h3>
                    <p><i class="fas fa-dollar-sign"></i> $${sub.cost} / ${sub.billingCycle}</p>
                    <p><i class="fas fa-calendar-check"></i> Started: ${new Date(sub.startDate).toLocaleDateString()}</p>
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
        noSubs.textContent = 'No subscriptions found.';
        subscriptionList.appendChild(noSubs);
    }
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

// Toggle subscription status
async function toggleStatus(id) {
    const subscription = subscriptions.find(sub => sub.id === id);
    const newStatus = subscription.status === 'active' ? 'inactive' : 'active';
    
    // If reactivating, update the start date to today
    if (newStatus === 'active') {
        const today = new Date();
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

// Add edit form submission handler
editSubscriptionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('editSubscriptionId').value);
    const subscription = subscriptions.find(sub => sub.id === id);
    
    const updatedSubscription = {
        ...subscription,
        cost: parseFloat(document.getElementById('editCost').value),
        billingCycle: document.getElementById('editBillingCycle').value,
        startDate: document.getElementById('editStartDate').value
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