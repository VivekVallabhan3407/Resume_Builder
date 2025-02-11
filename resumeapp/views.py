from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .forms import ResumeForm
from .models import Resume

@login_required(login_url='login')
def home_view(request):
    return render(request, 'resumeapp/index.html')

@login_required(login_url='login')
def create_resume_view(request):
    if request.method == 'POST':
        form = ResumeForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()  
            messages.success(request, "Resume submitted successfully!")
            
            return redirect('templates')  
        else:
            print("Form errors:", form.errors)
            messages.error(request, "There was an error in the form. Please check your input.")
    else:
        form = ResumeForm()
    
    return render(request, 'resumeapp/create-resume.html',{'form': form})


def about_us_view(request):
    return render(request, 'resumeapp/about-us.html')

@login_required(login_url='login')
def templates_view(request):
    return render(request, 'resumeapp/templates.html')

@login_required(login_url='login')
def profile_view(request):
    return render(request, 'resumeapp/profile.html')

def login_view(request):
    if request.method == "POST":
        uname = request.POST.get("username")
        password = request.POST.get("password")
        
        user = authenticate(request, username=uname, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('index')  
        else:
            messages.error(request, "Invalid email or password")
    return render(request, 'resumeapp/login.html')

def signup_view(request):
     if request.method == "POST":
    
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")
        password2 = request.POST.get("password2")
        
    
        if password != password2:
            messages.error(request, "Passwords do not match.")
            return redirect("signup")
        
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
            return redirect("signup")
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already exists.")
            return redirect("signup")

  
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()

        
        login(request, user)

       
        return redirect("login")
     return render(request, 'resumeapp/signup.html',{})

def forgot_password_view(request):
    return render(request, 'resumeapp/forgot-password.html')

def template1_view(request):
    return render(request, 'resumeapp/template1.html')

def template2_view(request):
    return render(request, 'resumeapp/template2.html')

def template3_view(request):
    return render(request, 'resumeapp/template3.html')

def preview_template(request, template_id):
    template_name = f"resumeapp/template{template_id}.html"
    return render(request, template_name)






def logout_view(request):
    logout(request)  
    return redirect('login') 