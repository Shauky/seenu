# Generated by Django 4.1.4 on 2022-12-29 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_user_bio_user_name_alter_customer_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(default='avatar.png', null=True, upload_to=''),
        ),
    ]
