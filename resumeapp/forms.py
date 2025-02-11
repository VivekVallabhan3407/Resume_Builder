# resumeapp/forms.py
from django import forms
from .models import Resume


class ResumeForm(forms.ModelForm):
    class Meta:
        model = Resume
        fields = ['name', 'email', 'phone', 'place', 'profileImage', 'summary', 'jobTitle', 'company', 'workDates', 'responsibilities', 'degree', 'institution', 'graduationDate', 'soft_skills', 'hard_skills', 'projects', 'certifications', 'awards', 'hobbies']
