/**
 * Mandate Capital — Main JavaScript
 * Plain vanilla JS, no frameworks
 */

(function() {
    'use strict';

    // Mobile navigation toggle
    function initMobileNav() {
        const toggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.nav');

        if (toggle && nav) {
            toggle.addEventListener('click', function() {
                nav.classList.toggle('active');
            });

            // Close nav when clicking outside
            document.addEventListener('click', function(e) {
                if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                    nav.classList.remove('active');
                }
            });
        }
    }

    // Form validation
    function initFormValidation() {
        const form = document.getElementById('mandate-form');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Check required acknowledgements
            const ack1 = document.getElementById('ack-submission');
            const ack2 = document.getElementById('ack-deposit');
            const ack3 = document.getElementById('ack-terms');

            if (!ack1.checked || !ack2.checked || !ack3.checked) {
                alert('All acknowledgements are required.');
                return;
            }

            // Check at least one asset class selected
            const assetClasses = document.querySelectorAll('input[name="asset_class[]"]:checked');
            if (assetClasses.length === 0) {
                alert('Select at least one asset class.');
                return;
            }

            // Basic field validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#c0392b';
                } else {
                    field.style.borderColor = '';
                }
            });

            if (!isValid) {
                alert('Complete all required fields.');
                return;
            }

            // If validation passes, show confirmation
            showSubmissionConfirmation();
        });

        // Clear error styling on input
        const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
        inputs.forEach(function(input) {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        });
    }

    // Submission confirmation
    function showSubmissionConfirmation() {
        const form = document.getElementById('mandate-form');
        const formContainer = form.parentElement;

        // Create confirmation message
        const confirmation = document.createElement('div');
        confirmation.className = 'card';
        confirmation.innerHTML = `
            <h2>Mandate Submitted for Review</h2>
            <p>
                Your mandate has been received. Submission does not constitute acceptance.
            </p>
            <p>
                Mandates are reviewed on a discretionary basis. If your mandate is accepted,
                you will receive written confirmation with engagement terms.
            </p>
            <p class="text-muted text-small mb-0">
                No further action is required at this time.
            </p>
        `;

        // Replace form with confirmation
        form.style.display = 'none';
        formContainer.appendChild(confirmation);

        // Scroll to confirmation
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Initialise on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        initMobileNav();
        initFormValidation();
    });

})();


/**
 * Stripe Integration Placeholder
 *
 * Payment integration is deferred until mandate acceptance.
 * Upon acceptance, engagement deposit will be collected via:
 *
 * Option A: Stripe Payment Links (manual)
 * - Create payment link in Stripe Dashboard
 * - Send link to accepted mandate holders
 *
 * Option B: Stripe Checkout (requires backend)
 * - Create checkout session server-side
 * - Redirect accepted mandate holders to checkout
 *
 * Note: No payment is collected at submission.
 */
