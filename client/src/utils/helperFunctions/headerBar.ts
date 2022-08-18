export const pageTitle = (path: string) => {
  if (path === '/dashboard') return 'Waggle';
  if (path === '/matchingView') return 'Waggles';
  if (path === '/matchingViewDetail') return 'Waggles';
  if (path === '/chatDashboard') return 'Matches';
  if (path === '/chat') return 'Fix this!'; // Get user from somewhere!
  if (path === '/eventsDashboard') return 'Events';
  if (path === '/eventDetails') return 'Events';
  if (path === '/addEventForm') return 'Add Event';
  if (path === '/settingsView') return 'Settings';
  if (path === '/editProfile') return 'Edit Profile';
  if (path === '/profile') return 'Your Profile';
  else return false;
};

export const pagesWithBackButton = (path: string) => {
  if (path === '/matchingViewDetail') return true;
  if (path === '/chat') return true;
  if (path === '/eventDetails') return true;
  if (path === '/addEventForm') return true;
  if (path === '/editProfile') return true;
  if (path === '/profile') return true;
  else return false;
};
