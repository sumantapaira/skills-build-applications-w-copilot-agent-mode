from django.core.management.base import BaseCommand
from octofit_tracker.models import Team, User, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):

        # Database is dropped before running this command, so only insert test data

        # Create teams
        marvel = Team(name='Marvel')
        marvel.save()
        dc = Team(name='DC')
        dc.save()

        # Create users
        users = []
        users.append(User(name='Spider-Man', email='spiderman@marvel.com', team=marvel))
        users[-1].save()
        users.append(User(name='Iron Man', email='ironman@marvel.com', team=marvel))
        users[-1].save()
        users.append(User(name='Wonder Woman', email='wonderwoman@dc.com', team=dc))
        users[-1].save()
        users.append(User(name='Batman', email='batman@dc.com', team=dc))
        users[-1].save()

        # Create workouts
        workouts = []
        workouts.append(Workout(name='Cardio Blast', description='High intensity cardio workout', difficulty='Hard'))
        workouts[-1].save()
        workouts.append(Workout(name='Strength Training', description='Build muscle and strength', difficulty='Medium'))
        workouts[-1].save()

        # Create activities
        Activity(user=users[0], type='Running', duration=30, calories=300, date=timezone.now().date()).save()
        Activity(user=users[1], type='Cycling', duration=45, calories=400, date=timezone.now().date()).save()
        Activity(user=users[2], type='Swimming', duration=60, calories=500, date=timezone.now().date()).save()
        Activity(user=users[3], type='Yoga', duration=40, calories=200, date=timezone.now().date()).save()

        # Create leaderboard
        Leaderboard(team=marvel, points=700, rank=1).save()
        Leaderboard(team=dc, points=600, rank=2).save()

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
