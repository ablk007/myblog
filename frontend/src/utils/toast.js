// Toast notification service
class ToastService {
  // Success toast
  success(message, duration = 3000) {
    this.show(message, 'success', duration);
  }

  // Error toast
  error(message, duration = 3000) {
    this.show(message, 'error', duration);
  }

  // Warning toast
  warning(message, duration = 3000) {
    this.show(message, 'warning', duration);
  }

  // Info toast
  info(message, duration = 3000) {
    this.show(message, 'info', duration);
  }

  // Show toast
  show(message, type = 'info', duration = 3000) {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.custom-toast');
    existingToasts.forEach(toast => toast.remove());

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `custom-toast custom-toast-${type}`;
    
    // Icon based on type
    const icons = {
      success: '<i class="ti ti-circle-check"></i>',
      error: '<i class="ti ti-circle-x"></i>',
      warning: '<i class="ti ti-alert-circle"></i>',
      info: '<i class="ti ti-info-circle"></i>'
    };

    toast.innerHTML = `
      <div class="custom-toast-icon">${icons[type]}</div>
      <div class="custom-toast-message">${message}</div>
      <button class="custom-toast-close" onclick="this.parentElement.remove()">
        <i class="ti ti-x"></i>
      </button>
    `;

    // Add to body
    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.classList.add('custom-toast-show');
    }, 10);

    // Auto remove after duration
    setTimeout(() => {
      toast.classList.remove('custom-toast-show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, duration);
  }
}

// Create singleton instance
const toast = new ToastService();

export default toast;
