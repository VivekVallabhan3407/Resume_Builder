from django.urls import path
from . import views  

urlpatterns = [
    path('', views.home_view, name='index'),  
    path('create-resume/', views.create_resume_view, name='create-resume'), 
    path('about-us/', views.about_us_view, name='about-us'), 
    path('templates/', views.templates_view, name='templates'),  
    path('profile/', views.profile_view, name='profile'), 
    path('login/', views.login_view, name='login'),  
    path('signup/', views.signup_view, name='signup'),  
    path('forgot-password/', views.forgot_password_view, name='forgot-password'),  
     path('template1/', views.template1_view, name='template1'),
    path('template2/', views.template2_view, name='template2'),
    path('template3/', views.template3_view, name='template3'),
    path('preview/<int:template_id>/', views.preview_template, name='preview_template'),
    path('logout/', views.logout_view, name='logout'),
   
]

