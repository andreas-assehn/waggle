export const pageTitle = (path: string) => {
  if (path === '/dashboard') return 'Waggle';
  if (path === '/matchingView') return 'Waggles';
  if (path.includes('/matchingViewDetail')) return 'Waggles';
  if (path === '/chatDashboard') return 'Matches';
  if (path.includes('/chat')) return 'Chat';
  if (path === '/eventsDashboard') return 'Events';
  if (path.includes('/eventDetails')) return 'Events';
  if (path === '/addEventForm') return 'Add Event';
  if (path.includes('/editEvent')) return 'Edit Event';
  if (path === '/settingsView') return 'Settings';
  if (path === '/editProfile') return 'Edit Profile';
  if (path === '/profile') return 'Your Profile';
  else return false;
};

export const pagesWithBackButton = (path: string) => {
  if (path.includes('/matchingViewDetail')) return true;
  if (path.includes('/chat')) return true;
  if (path.includes('/eventDetails')) return true;
  if (path === '/addEventForm') return true;
  if (path === '/editProfile') return true;
  if (path === '/settingsView') return true;
  else return false;
};
