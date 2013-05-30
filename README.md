This is a fork of the read-only SVN clone of OSQA for improvements and bug fixes. For details of the improvements, see the following posts on OSQA meta:

* http://meta.osqa.net/questions/11337/improvements-to-osqa-how-do-i-request-that-patches-be-reviewedlanded-in-svn
* http://meta.osqa.net/questions/11580/is-anyone-interested-in-testing-experimental-endless-pagingpjax-loading
* http://meta.osqa.net/questions/7400/is-mobile-formatting-in-the-future-of-osqa/11550

This fork also significantly improves performance by a addressing template parsing overhead problem. I also strongly recommend using pgpool2 for production environments:

* http://meta.osqa.net/questions/11381/is-osqa-cpu-bound

I'm happy to accept pull requests and if there's demand, I'd consider making this a maintained, legitimate fork of OSQA. Development/maintenance appears to have slowed significantly.
