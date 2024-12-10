from django.core.mail import EmailMessage
from smtplib import SMTPConnectError, SMTPException
import time
from django.shortcuts import redirect, render
from django.contrib import messages

# Create your views here.
def index(request):
    return render (request, "index.html", {'active_page': 'home'})

def about(request):
    return render (request, "about.html", {'active_page': 'about'})

def contact(request):
    if request.method == 'POST':
        if 'contact_submit' in request.POST:        
            name = request.POST['name']
            email = request.POST['email']
            message = request.POST['message']

            subject = f'Contact Form Submission from {name}'
            html_message = f"""
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                    <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                        <h2 style="color:#2487ce;">New Contact Form Submission</h2>
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <hr style="border: 0; border-top: 1px solid #ddd;">
                        <p style="font-size: 16px;"><strong>Message:</strong></p>
                        <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2487ce;">{message}</p>
                    </div>
                    <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #999;">
                        <p>&copy; 2024 Zero|Runtime. All rights reserved.</p>
                    </footer>
                </body>
            </html>
            """

            try:
            # Create and send the email
                email_message = EmailMessage(
                    subject=subject,
                    body=html_message,
                    from_email='emmanuelaforo5@gmail.com',
                    to=['emmanuelaforo5@gmail.com'],
                    reply_to=[email],
                )
                email_message.content_subtype = 'html'  # Mark email as HTML
                email_message.send(fail_silently=False)

                messages.success(request, 'Your message has successfully been sent.', extra_tags='success-message')
                return redirect('contact')

            except SMTPException as smtp_error:
                messages.error(request, 'SMTP error: Unable to send your message. Please try again later.', extra_tags='error-message')
                print(f"SMTP error: {smtp_error}")
            except Exception as e:
                messages.error(request, 'An error occurred while sending your message. Please try again later.', extra_tags='error-message')
                print(f"Unexpected error: {e}")



    return render (request, "contact.html", {'active_page': 'contact'})

def works(request):
    return render (request, "works.html", {'active_page': 'works'})