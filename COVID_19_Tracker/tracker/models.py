from django.db import models

class CovidData(models.Model):
    state = models.CharField(max_length=25)
    last_update = models.DateField()
    positive = models.IntegerField(default=0)
    negative = models.IntegerField(default=0)
    recovered = models.IntegerField(default=0)
    deaths = models.IntegerField(default=0)

    def serialize(self):
        return {
            "state": self.state,
            "lastUpdateEt": self.last_update,
            "positive": self.positive,
            "negative": self.negative,
            "recovered": self.recovered,
            "death": self.deaths
        }