This is a fork of the read-only SVN clone of OSQA for improvements and bug fixes. For details of the improvements, see the following posts on OSQA meta:

* http://meta.osqa.net/questions/11337/improvements-to-osqa-how-do-i-request-that-patches-be-reviewedlanded-in-svn
* http://meta.osqa.net/questions/11580/is-anyone-interested-in-testing-experimental-endless-pagingpjax-loading
* http://meta.osqa.net/questions/7400/is-mobile-formatting-in-the-future-of-osqa/11550

This fork also significantly improves performance by addressing a template parsing overhead problem. I also strongly recommend using pgpool2 for production environments:

* http://meta.osqa.net/questions/11381/is-osqa-cpu-bound

I'm happy to accept pull requests and if there's demand, I'd consider making this a maintained, legitimate fork of OSQA. Development/maintenance appears to have slowed significantly.

#### Quick Start ####

Assuming an existing Python and PostgreSQL installation (Mac OS/brew in my case).

You'll need to install the following:

    pip install Django==1.3.7
    pip install Markdown==2.4.1
    pip install html5lib
    pip install django-endless-pagination
    pip install psycopg2

And create the database for OSQA:

    createuser -P osqa
    psql template1
    CREATE DATABASE osqa OWNER osqa;

Copy settings_local.py.dist to settings_local.py. Update the database settings:

    DATABASES = {
        'default': {
            'ENGINE': 'postgresql_psycopg2',
            'NAME': 'osqa',
            'USER': 'osqa',
            'PASSWORD': 'osqa',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }

And the application URL:

    APP_URL = 'http://localhost'

Create the schema and start a development server:

    python manage.py syncdb
    python manage.py runserver

Finally, access OSQA for the first time and register an account. That account will be granted administrator privileges.