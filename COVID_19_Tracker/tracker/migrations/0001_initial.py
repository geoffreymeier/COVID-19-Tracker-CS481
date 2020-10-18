# Generated by Django 3.1.1 on 2020-10-18 02:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CovidData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.CharField(max_length=25)),
                ('last_update', models.DateField()),
                ('positive', models.IntegerField(default=0)),
                ('negative', models.IntegerField(default=0)),
                ('recovered', models.IntegerField(default=0)),
                ('deaths', models.IntegerField(default=0)),
            ],
        ),
    ]
