from django.db import models





    
# Create your models here.
class Resume(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    place = models.CharField(max_length=100)
    profileImage = models.ImageField(upload_to='profile_images/')
    summary = models.TextField()
    jobTitle = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    workDates = models.CharField(max_length=100)
    responsibilities = models.TextField()
    degree = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    graduationDate = models.CharField(max_length=100)
    soft_skills = models.TextField(blank=True, null=True, verbose_name="Soft Skills")  
    hard_skills = models.TextField(blank=True, null=True, verbose_name="Hard Skills")  
    projects = models.TextField()
    certifications = models.TextField()
    awards = models.TextField()
    hobbies = models.TextField()

    class Meta:
        db_table="Resume"

    def __str__(self):
        return self.name