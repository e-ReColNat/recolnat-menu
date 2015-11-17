'use strict';

export default {
  projectUrl: 'http://recolnat.org/',
  height: 35,
  modules: [
    {
      'label': 'Présentation',
      'symbol': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYWCgAfVRFxmgAAAYZJREFUOMut1U9LVWEQBvDfOd4oJM8+vKs2rrsbW0QYLkO3rQJdiNgH6DME7iUIbtt00/Xfop2oYItq71ISDQoXGima2maMy/W8516ygQOHd555mJl35nkz1y3HXQzhGR7hXvj2sYl5bOMnLtqDsw6yO5jEU/RhCV+wG/46GhjHOVbxFicliamhifd4rLuNoBUxNSWZNfEaA3q3gYhpBsffns1EZimyUbxK+IrIdCa4FFipKLMf36P5ExXlr6DI4zb7sJ4A/8IbfMBWArMWHEO1GI2lBPB+jM0nfMZpRT+Xg8tHDCdADzCHHzjAVAXhw+Cyg8EK4GDM4SmmK3B17OQ9jMYZLuPranmsU93NrY79PHaz8R8IG9jIY9HHu1SR9UA4hoU8VOM8hrNMOL7hd/wfJMieBMd2++q1SlbveUjUHr6GqrzrwBVYvFq9rE0c5mI0XuIwzm9HcN6W9TGO4tYLzOIWXnTK2JV8tUrKT5W52Clf3QR2OSGwYymBzf7hCdjAQuoJ+APa1Fygv8WIlgAAAABJRU5ErkJggg==',
      'url': 'http://www.recolnat.org/presentation',
      'domain': 'www.recolnat.org'
    },
    {
      'label': 'Recherche',
      'symbol': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYWCgg61swv1QAAASBJREFUOMut1KFLQ1EUx/HPNpNBZSszrFjN/g2m/QmiUWwLgn+AwZkWzNrEomgwLYgr2lRYF80iYtA0ZjmD+dj27uD94MDj3t/73nPOPVz+q4F99DGMeEYLdXNqC98BucAu9nAda7/YmQc2RBfVCfs19MLTzIM1IrMuFnK8DwGdqf0wVRMqWcIAnVmmfvQsRRXc4R2lSYYy1sOUogFesYjlacDRyakqzdos4wWbc5S8hh98TTO14lJqCcBaeI9mmeoxtL2EUp8is9wWbcfJjzEalUyZtYANcZDa7Gb8MIhbP8UZ7mP9EyfxfYjVVHAn5uwj4i16Nsr6fOzhaM8zGisRWW2MAXMvKFW3RUMruMlAj4vINAttF5HpePmXCtJVhD93xVFIjHt0hQAAAABJRU5ErkJggg==',
      'url': 'http://explore.recolnat.org/',
      'domain': 'explore.recolnat.org'
    },
    {
      'label': 'Transcrire',
      'symbol': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABRklEQVQ4T6WUu0oDQRSGTWsnpBMVLFS0Fry0IoovYWOjoAHLlGlS5BW08tJo8hKxFUQrL5WNhSDa2fn9yzmyWd3JzmTgY/Y23/4ze3ZqY+ltiqFN6MCza2qJPsn6cAl7sAJPcqUIXXbM+CvYgnNYhcdY4bQl+zbBu81Q0gsljRFKdgOHUIcD2ACXtjierCrMy3qWSmu3b1JN9xTWqgj/k/m3lFRrOSEZvAwTuuyIh7tuyfU7HJ/AumS6HhJWkWXTdFlImCQrE85wQ0UbmuafZL4MxSmPJCsmdFmDG9clH6A0WTGhr9lIsnzCBU7uYAl+dw57q0pjaLJiQtXQPLyBqj7bOWhRMk84zsEX6P/UNqSdQ/1cTLJ8wmVOziyhri/CLXzCQNH6oFCvstmFNrya9IN+G7RFZb9TTJNwE2bhHh4sWYxj4Nkfwk1N/brq2I4AAAAASUVORK5CYII=',
      'url': 'http://herbonautes.mnhn.fr',
      'domain': 'herbonautes.mnhn.fr'
    },
    {
      'label': 'Contrôler',
      'symbol': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACrUlEQVQ4T9WUTUhUURTH77nvYz7MchGaEO1Cg5BsHAdLR0Xya4YWQUK1CHIRWUm5KUT7ELVFoVktgsogyM20CsexsoWjRY4zGZK4qWgXFn0YKs57797TfS9nmFIXghvf7p13zu/9/+ece4Gs8wPrzCMbGJjnKdtut6UdQwL5CIjCigEIlANOGXHW9+7N4OeV2rXMck7O/vQt2zKuEsTNjJN7sdGBiCjERHFBUU0+VegJToiqGXrr5OvnX1PB/wDNZKJI7YzxyxOvBqK7PRVZDpujWSRt/VuEPxbii+3vx17O7PEc2KmqynWh/c74aHAoAU0CXSU+nwRwdP674+TUVGDOhDnttvtMx3OyjWZomvCL+FOSaM+CtlhvQgVEdnv9NwnnsfHRgYcm1AK6vbV1QGh5JNx/WrwKN2bM38MNdosq0IKETgNyCgRytbjWodrUxkg4eDahyl1a2ymUfoiGg73g9voOiQ8V4+HgmdReFXr9j0HCLtHHquhwsHPpxy1UghByciEyHKxL7Z0pgHH+AvYW1/plSn1CXcP/QJ3xbkWCKqGmwwKW+i5xbvRLVL64HOjrRiRjluXC0oOHCTKvKGxMQAu9vtuGbvRQVWkWdj8RACq2ZwfTjRugKg1CtZlrtc3sIxIWi4ZDj5JDWYJWR7Kcp0ggoFlDUe0P4rjYRInsABBbaHCNqmqX8Xv2+MTEyDeXy+WUNmXf5Zw9jY6EniSHktyx4uoykOQmrrPzsdehj3n7KjPtstKKBDOtpQGY0XS93dw9T7nPxRi0IedtYlfHlq1NIrDLVZWdniZfYwR/IfLetyODkynNpwUlNUWESvXC/ixXnVdiQ4HZ1OGsejm4iipzqawcIYC5hFDrpFhHEEl0bt7om449+5IKWlXhSklriW3g62stNlNz/wAkxSo8EYp3agAAAABJRU5ErkJggg==',
      'url': 'http://controle.recolnat.org',
      'domain': 'controle.recolnat.org',
      'callback': "callback%3Fclient_name%3DCasClient"
    },
    {
      'label': 'Laboratoire',
      'symbol': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABaElEQVQ4T8XUTSiEQRzHcRsHJHGRcnTci6MTchEHJy8XVy5Oe0R5SblQcpOXIoRcHMRFa9Ne9qpQoiRKUhIpL+H70zw1TZPm0ZanPs0zM/v/95+ZnSdR4H/KGH72TLUyNo9bZ66afi/2Ep6gJsa2UYdLZ76TfhKjzrj6x9hyE6qyHJbQhmZ8WcGxE86ZCt5pi7GOGSfhAP0LpHBt5rwVNjI5hBZTlarNoh1XJlAVNmAW53j9LeGO+dEY7RmqkEEaGtMTK+E0AR2IKqvn/QWDWLMSBi9Z+3CKYXRhHEf4OT0rYfApK6GCR9Bt2hNPwlgVhiQMPpTQCvOeMO9L/r9D2eREdVvKcY8KfGACU9bfJngPFfiIfROspg8H2PhLwhWCahFdeOXQfi1At0iPrl7wofTz41JMWhUu876IQyth8KFo77TcJ3yiBHfQ/VY/qjA4oQKKUINCvOEG9gdWH91VPFir0GslerD7DS5UoxUhU24iAAAAAElFTkSuQmCC',
      'hover': 'Laboratoire scientifique collaboratif - A venir',
      'domain': 'N/A',
      'url': '#'
    }
  ]
};