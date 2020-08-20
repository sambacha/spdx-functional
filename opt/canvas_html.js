def canvas_html( before, after ):
    d = ''.join(
                  ndiff(
                    before.splitlines(1),
                    after.splitlines(1)
                        )
                     )

    esutils = {'+':'color:green;', '-':'color:red;text-decoration:line-through;',}
    new = u""
    previous_zone = 'new'    
    for l in d.splitlines(1):
        l=l+u"  "
        zone = l[0]
        if zone in ( '+', '-'):
            if zone != previous_zone:
                if previous_zone != 'new': new += u"</span>"
                new += u"<span style='{esutil};'>".format( esutil = esutils[zone])
                previous_zone = zone
            new += l[1:] 
        elif l.startswith( '?' ):
            pass
        else:
            new += l[1:]

    return new